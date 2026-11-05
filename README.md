# 📺 TV ao Vivo — Stream de Canais BR

> Assista canais ao vivo direto no navegador. Sem cadastro complicado, sem backend, apenas **login rápido** (`admin` / `admin`) e você está dentro.

<div align="center">

[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-orange?style=for-the-badge)](https://github.com)
[![Frontend](https://img.shields.io/badge/frontend-HTML%20%2B%20JS-blue?style=for-the-badge)](https://developer.mozilla.org)
[![CSS Modular](https://img.shields.io/badge/css-modular-purple?style=for-the-badge)](https://developer.mozilla.org)
[![HLS.js](https://img.shields.io/badge/player-hls.js-red?style=for-the-badge)](https://github.com/video-dev/hls.js)
[![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)](LICENSE)

</div>

---

## ✨ Funcionalidades

| Recurso | Descrição |
|---------|-----------|
| 🔐 **Login simples** | Usuário `admin`, senha `admin`. Sessão salva no navegador. |
| 🚪 **Sair a qualquer hora** | Botão **Sair** no topo para encerrar a sessão. |
| 📺 **Canais com sinal** | Apenas canais que realmente possuem stream disponível são exibidos. |
| 🔍 **Busca instantânea** | Digite no campo de busca e filtre os canais na hora. |
| 🔗 **Link direto** | Cole qualquer `.m3u8` ou `.mp4` e assista na hora. |
| 📱 **Responsivo** | Funciona no celular, tablet e desktop. |
| 🌙 **Dark mode** | Tema escuro moderno com fundo degradê e glassmorphism. |

---

## 🖼️ Preview

<div align="center">

### 🔐 Tela de Login

![Tela de login](https://media.giphy.com/media/3o7aCSPqXE586TIIhG/giphy.gif)

*Entre com `admin` / `admin` para acessar.*

</div>

<div align="center">

### 📺 Menu de Canais

![Menu de canais](https://media.giphy.com/media/l0HlN3pEh5x2V65QA/giphy.gif)

*Todos os canais com sinal disponível, prontos para assistir.*

</div>

> 💡 **Dica:** Substitua os GIFs acima por capturas reais do seu projeto para deixar ainda mais incrível!

---

## 🚀 Começando em 30 segundos

### 1. Clone ou baixe

```bash
git clone https://github.com/seu-usuario/tv-ao-vivo.git
cd tv-ao-vivo
```

### 2. Abra o projeto

Basta abrir o `index.html` no navegador:

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

Ou simplesmente dê **duplo clique** no arquivo `index.html`.

> ⚠️ Para usar os scripts em módulo (`type="module"`), recomenda-se servir via HTTP (ex: [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) do VS Code).

### 3. Faça login

- **Usuário:** `admin`
- **Senha:** `admin`

Pronto! Você está dentro. 🎉

---

## 📁 Estrutura do projeto

```
tv-ao-vivo/
├── index.html                 # Shell HTML principal
├── README.md
└── assets/
    ├── css/
    │   ├── variables.css      # Variáveis :root (cores, bordas)
    │   ├── base.css           # Reset, corpo, fontes
    │   ├── layout.css         # Layout (app, header, player, sidebar)
    │   ├── components.css     # Componentes (chips, logos, fontes)
    │   └── login.css          # Tela de login
    └── js/
        ├── config.js          # Constantes (API, DEMO, credenciais)
        ├── state.js           # Estado global compartilhado
        ├── auth.js            # Login / logout / sessão
        ├── player.js          # Player HLS (hls.js) + overlay
        ├── ui.js              # Renderização de canais, busca
        └── main.js            # Orquestração / entry point
```

---

## 🎨 Design

- **CSS modular e organizado** em arquivos separados por responsabilidade
- **Tema escuro** com fundo degradê dinâmico
- **Glassmorphism** nos painéis e overlays
- **Animações suaves** de entrada, hover e foco
- **Responsivo:** 1 coluna no mobile, 2 colunas (player + lista) no desktop
- **Acessibilidade:** foco visível, `prefers-reduced-motion`, labels ARIA

---

## 🔑 Credenciais de demonstração

| Campo | Valor |
|-------|-------|
| 👤 Usuário | `admin` |
| 🔒 Senha | `admin` |

A sessão é mantida no `localStorage` do navegador. Para sair, clique no botão **Sair** no topo da página.

---

## 📡 Canais de teste incluídos

Quando a API externa não responde, os canais de teste abaixo entram automaticamente:

- 🎬 **Sintel · teste de reprodução** (720p)
- 🐰 **Big Buck Bunny · teste de reprodução** (1080p)

Você também pode colar qualquer link direto `.m3u8` ou `.mp4` no campo "Link direto" e assistir imediatamente.

---

## 🛠️ Tecnologias

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HLS.js](https://img.shields.io/badge/HLS.js-000000?style=for-the-badge)

</div>

---

## 📜 Licença

MIT — sinta-se livre para usar, modificar e distribuir.

---

<div align="center">

**Feito com ❤️ para assistir TV ao vivo no navegador.**

</div>
