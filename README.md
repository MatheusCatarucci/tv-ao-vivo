# TV ao vivo · Globo

Player simples de TV ao vivo no navegador. Carrega canais brasileiros da [API do iptv-org](https://iptv-org.github.io/api/) e reproduz transmissões com **hls.js** (HLS / .m3u8).

👉 [Acesse a demonstração](https://SEU-USUARIO.github.io/tv-globo/)

---

## O que faz

- Lista canais de TV do Brasil (filtro por Globo / Todos do Brasil)
- Busca por nome de canal
- Reproduz streams HLS (.m3u8) com múltiplas fontes por canal (tenta a próxima se uma falhar)
- Overlay com status: carregando, ao vivo, sem sinal
- Campo para colar um **link direto** de stream (.m3u8 ou .mp4)
- Canais de teste integrados (fallback) caso a API não responda

---

## Como usar

### 1. Abra o arquivo localmente

Basta abrir o arquivo `tv-globo.html` em qualquer navegador moderno:

```bash
# no mesmo diretório
start tv-globo.html   # Windows
open tv-globo.html    # macOS
xdg-open tv-globo.html # Linux
```

Ou abra direto no navegador clicando duas vezes no arquivo.

### 2. Hospede no GitHub Pages (grátis)

1. Crie um repositório público no GitHub, ex. `tv-globo`
2. Envie o arquivo `tv-globo.html` para a raiz do repositório
3. Vá em **Settings > Pages**
4. Em **Build and deployment > Source**, selecione **Deploy from a branch**
5. Escolha a branch `main` e a pasta `/ (root)`
6. Clique em **Save**

Após alguns instantes, seu player estará disponível em:
`https://seu-usuario.github.io/tv-globo/`

---

## Estrutura do projeto

```
tv-globo/
└── tv-globo.html   # Único arquivo: HTML + CSS + JS
```

Não há dependências para instalar. O único recurso externo é a biblioteca [hls.js](https://github.com/video-dev/hls.js) carregada via CDN.

---

## Canais de teste

Quando a API de canais não responde ou não retorna sinal, o app mostra automaticamente canais de teste para você verificar se o player está funcionando:

- **Sintel · teste de reprodução** (720p)
- **Big Buck Bunny · teste de reprodução** (1080p)

Esses streams são públicas e servem apenas para validar a reprodução.

---

## ⚠️ Limitações importantes

- **Canais de TV aberta gratuitos são instáveis.** Os links públicos da API iptv-org saem do ar ou bloqueiam reprodução de outros sites (CORS) com frequência. Se nenhum canal tocar, tente o botão **"Tentar novamente"** ou cole um link direto de uma stream que saiba que funciona.
- **CORS:** algumas transmissões só funcionam se o servidor de origem permitir requisições de outros domínios. Isso está fora do controle deste player.
- **HTTPS:** se você hospedar em HTTPS, streams em `http://` são ignoradas pelo navegador por segurança. Use apenas links `https://`.

---

## Tecnologias

- HTML5 + CSS3 (puro, sem framework)
- [hls.js](https://github.com/video-dev/hls.js) via CDN (reprodução de HLS)
- API [iptv-org](https://iptv-org.github.io/api/) (lista de canais e streams)

---

## Licença

MIT — sinta-se livre para usar, modificar e distribuir.

---

Feito com ❤️ para assistir TV ao vivo no navegador.
