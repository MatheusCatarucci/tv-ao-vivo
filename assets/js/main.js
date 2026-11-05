import { API, DEMO } from './config.js';
import { S } from './state.js';
import {
  checkLogin,
  logout,
  handleLogin,
  loginForm,
  loginScreen
} from './auth.js';
import {
  $,
  setStatus,
  overlay,
  render,
  select,
  initials
} from './ui.js';
import { play, fail, playDirect, initVideoEvents } from './player.js';

const app = {
  S,
  play,
  select,
  idx: 0
};

window.app = app;

async function loadChannels() {
  setStatus('load', 'Carregando canais…');
  overlay();
  let ok = false;

  try {
    const [channels, streams] = await Promise.all([
      fetch(API + 'channels.json').then(r => r.json()),
      fetch(API + 'streams.json').then(r => r.json())
    ]);

    const blockHttp = location.protocol === 'https:';

    for (const s of streams) {
      if (!s.channel || (blockHttp && s.url.startsWith('http:'))) continue;
      if (!S.streams.has(s.channel)) S.streams.set(s.channel, []);
      S.streams.get(s.channel).push(s);
    }

    for (const list of S.streams.values()) {
      list.sort((a, b) => (parseInt(b.quality) || 0) - (parseInt(a.quality) || 0));
    }

    S.channels = channels
      .filter(c => c.country === 'BR' && !c.is_nsfw && !c.closed && S.streams.has(c.id))
      .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));

    ok = S.channels.length > 0;
    S.fallback = !ok;
  } catch (e) {
    ok = false;
    S.fallback = true;
  }

  if (!ok) {
    S.channels = DEMO;
    setStatus('err', 'Canais de teste');
    overlay('Transmissões ao vivo indisponíveis', 'A API de canais não respondeu ou não retornou sinal. Abaixo estão canais de teste para verificar se o player está funcionando.', true);
  }

  render();
  const first = S.channels[0];
  if (first) {
    select(first);
  } else {
    setStatus('err', 'Sem sinal');
    overlay('Nenhum canal disponível', 'Não há canais para reproduzir agora. Tente novamente mais tarde.', true);
  }
}

function setupAuthUI() {
  const appEl = document.getElementById('app');

  if (!checkLogin()) {
    appEl.style.display = 'none';
    loginForm.addEventListener('submit', e => {
      if (handleLogin(e)) {
        appEl.style.display = '';
        loadChannels();
      }
    });
    return;
  }

  appEl.style.display = '';
  loadChannels();
}

function setupHeaderLogout() {
  const btnLogout = document.getElementById('btnLogout');
  if (btnLogout) {
    btnLogout.onclick = () => logout();
  }
}

function setupSearch() {
  $('search').addEventListener('input', e => {
    S.q = e.target.value;
    render();
  });
}

function setupRetry() {
  $('ovRetry').onclick = loadChannels;
}

function setupDirect() {
  $('btnDirect').onclick = () => {
    const url = $('directUrl').value.trim();
    if (!url) {
      $('directUrl').focus();
      return;
    }
    if (!url.match(/\.(m3u8|mp4)(\?|$)/i)) {
      overlay('Link inválido', 'Insira um link terminando em .m3u8 ou .mp4.', true);
      return;
    }
    playDirect(url);
    overlay();
  };
}

initVideoEvents();
setupHeaderLogout();
setupAuthUI();
setupSearch();
setupRetry();
setupDirect();
