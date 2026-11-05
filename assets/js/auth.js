import { LOGIN_KEY, DEFAULT_USER, DEFAULT_PASS } from './config.js';

export const loginScreen = document.getElementById('loginScreen');
export const loginForm = document.getElementById('loginForm');
export const loginUser = document.getElementById('loginUser');
export const loginPass = document.getElementById('loginPass');
export const loginError = document.getElementById('loginError');

export let logged = false;

export function checkLogin() {
  const saved = localStorage.getItem(LOGIN_KEY);
  if (saved === 'ok') {
    logged = true;
    if (loginScreen) loginScreen.style.display = 'none';
    return true;
  }
  return false;
}

export function logout() {
  logged = false;
  localStorage.removeItem(LOGIN_KEY);
  if (loginScreen) loginScreen.style.display = 'flex';
  location.reload();
}

export function handleLogin(e) {
  e.preventDefault();
  const user = loginUser.value.trim();
  const pass = loginPass.value;
  loginError.textContent = '';

  if (user === DEFAULT_USER && pass === DEFAULT_PASS) {
    logged = true;
    localStorage.setItem(LOGIN_KEY, 'ok');
    if (loginScreen) loginScreen.style.display = 'none';
    return true;
  }

  loginError.textContent = 'Usuário ou senha incorretos. Tente admin / admin';
  loginPass.value = '';
  loginPass.focus();
  return false;
}

export function isLogged() {
  return logged;
}
