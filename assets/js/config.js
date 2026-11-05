export const API = 'https://iptv-org.github.io/api/';

export const DEMO = [
  {
    id: 'demo-sintel',
    name: 'Sintel · teste de reprodução',
    network: 'Demo',
    categories: ['Teste'],
    streams: [
      { url: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8', quality: '720p' },
      { url: 'https://bitmovin-a.akamaihd.net/content/sintel/hls/playlist.m3u8', quality: '720p' }
    ]
  },
  {
    id: 'demo-bbb',
    name: 'Big Buck Bunny · teste de reprodução',
    network: 'Demo',
    categories: ['Teste'],
    streams: [
      { url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8', quality: '1080p' },
      { url: 'https://stream.mux.com/x36xhzz.m3u8', quality: '1080p' }
    ]
  }
];

export const LOGIN_KEY = 'tvlogin';
export const DEFAULT_USER = 'admin';
export const DEFAULT_PASS = 'admin';
