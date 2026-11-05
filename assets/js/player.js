import { S } from './state.js';
import { $, video, setStatus, overlay, renderSources } from './ui.js';

export function fail() {
  setStatus('err', 'Sem sinal');
  overlay('Transmissão indisponível', 'Nenhuma fonte respondeu para este canal. Escolha outro na lista, tente outra fonte ou cole um link direto abaixo.', true);
}

export function play() {
  const list = S.streams.get(S.current.id) || [];
  const src = list[S.idx];
  renderSources();
  if (S.hls) {
    S.hls.destroy();
    S.hls = null;
  }
  video.removeAttribute('src');
  video.load();
  if (!src) {
    fail();
    return;
  }

  overlay();
  setStatus('load', 'Conectando…');

  const next = () => {
    if (S.idx + 1 < list.length) {
      S.idx++;
      play();
    } else {
      fail();
    }
  };

  if (window.Hls && Hls.isSupported()) {
    const h = S.hls = new Hls({ lowLatencyMode: true });
    h.loadSource(src.url);
    h.attachMedia(video);
    h.on(Hls.Events.MANIFEST_PARSED, () => video.play().catch(() => { }));
    h.on(Hls.Events.ERROR, (_, d) => { if (d.fatal) next(); });
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = src.url;
    video.onerror = next;
    video.play().catch(() => { });
  } else {
    fail();
  }
}

export function playDirect(url) {
  if (!url) return;
  S.current = { id: 'direct', name: 'Link direto', network: '', categories: ['Direto'] };
  S.streams.set('direct', [{ url, quality: 'Direto' }]);
  S.idx = 0;
  $('name').textContent = 'Link direto';
  $('meta').textContent = 'Stream inserida';
  $('logo').textContent = '▶';
  renderSources();
  play();
}

export function initVideoEvents() {
  video.addEventListener('playing', () => {
    overlay();
    setStatus('live', 'Ao vivo');
  });
  video.addEventListener('waiting', () => setStatus('load', 'Carregando…'));
}
