import { S } from './state.js';

export const $ = id => document.getElementById(id);
export const video = $('video');

export function setStatus(state, text) {
  $('status').dataset.s = state;
  $('statusText').textContent = text;
}

export function overlay(title, text, canRetry) {
  $('ovTitle').textContent = title || '';
  $('ovText').textContent = text || '';
  const show = !!title;
  $('overlay').classList.toggle('show', show);
  const btn = $('ovRetry');
  btn.style.display = canRetry && show ? 'inline-block' : 'none';
}

export const initials = n =>
  n.replace(/[^A-Za-zÀ-ú ]/g, '')
   .split(' ')
   .filter(Boolean)
   .slice(0, 2)
   .map(w => w[0])
   .join('')
   .toUpperCase() || 'TV';

export function logoEl(c, el) {
  el.textContent = '';
  if (c.logo) {
    const img = new Image();
    img.alt = '';
    img.src = c.logo;
    img.onerror = () => { el.textContent = initials(c.name); };
    el.appendChild(img);
  } else {
    el.textContent = initials(c.name);
  }
}

export function visible() {
  const q = S.q.trim().toLowerCase();
  return S.channels.filter(c => (!q || c.name.toLowerCase().includes(q)));
}

export function render() {
  const box = $('list');
  box.textContent = '';
  const items = visible();
  if (!items.length) {
    box.innerHTML = '<div class="empty">Nenhum canal encontrado.<br>Tente outro nome.</div>';
    return;
  }
  for (const c of items) {
    const b = document.createElement('button');
    b.className = 'item';
    b.setAttribute('aria-current', S.current && S.current.id === c.id);
    const l = document.createElement('div');
    l.className = 'logo';
    logoEl(c, l);
    const t = document.createElement('div');
    const n = document.createElement('b');
    n.textContent = c.name;
    const m = document.createElement('small');
    m.textContent = (c.categories || []).join(', ') || 'Geral';
    t.append(n, m);
    b.append(l, t);
    b.onclick = () => {
      window.app.select(c);
    };
    box.appendChild(b);
  }
}

export function renderSources() {
  const list = S.streams.get(S.current.id) || [];
  const box = $('sources');
  box.textContent = '';
  if (list.length < 2) return;
  const lab = document.createElement('span');
  lab.textContent = 'Fonte:';
  box.appendChild(lab);
  list.forEach((s, i) => {
    const b = document.createElement('button');
    b.className = 'chip';
    b.setAttribute('aria-pressed', i === S.idx);
    b.textContent = s.quality ? `${i + 1} · ${s.quality}` : `Fonte ${i + 1}`;
    b.onclick = () => {
      window.app.idx = i;
      window.app.play();
    };
    box.appendChild(b);
  });
}

export function select(c) {
  S.current = c;
  S.idx = 0;
  $('name').textContent = c.name;
  $('meta').textContent = [c.network, (c.categories || []).join(', ')].filter(Boolean).join(' · ') || 'Brasil';
  logoEl(c, $('logo'));
  render();
  window.app.play();
}
