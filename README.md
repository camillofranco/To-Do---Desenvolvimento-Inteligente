# 🚀 To,Do — IA para Atendimento Premium

Site institucional premium com **WebGL**, **animações avançadas** e **design Awwwards-level** para empresa de IA especializada em atendimento ao cliente.

## ✨ Features

- **🎨 Design Premium**: Gradientes sofisticados, cores neon, glassmorphism
- **🌐 WebGL Interativo**: Cena 3D com partículas animadas controladas por mouse
- **⚡ Animações GSAP**: Timeline orchestrated com ScrollTrigger
- **📱 100% Responsivo**: Mobile-first design com breakpoints otimizados
- **⚙️ Performance**: Code splitting, minificação, gzip otimizado
- **♿ Acessibilidade**: WCAG 2.1 compliant, prefers-reduced-motion
- **🔍 SEO Ready**: Meta tags, Open Graph, estrutura semântica

## 🛠️ Stack Tecnológico

```
Frontend
├── React 19 + React DOM
├── Vite (build tool moderno)
└── Tailwind-inspired CSS

Animações & 3D
├── GSAP 3.12 (ScrollTrigger, Timeline)
├── Three.js 0.167 (WebGL)
└── Framer Motion (React animations)

Icons & Utilities
├── Lucide React (ícones premium)
└── Node.js + npm

Deploy
└── GitHub Pages (gh-pages)
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Hero.jsx          # Hero com WebGL background
│   ├── Features.jsx      # Features grid animado
│   ├── Process.jsx       # Timeline do processo
│   ├── CTA.jsx           # Call-to-action com form
│   ├── Footer.jsx        # Footer com links
│   └── WebGLScene.jsx    # Cena 3D interativa (Three.js)
├── App.jsx               # Componente raiz
├── main.jsx              # Entry point React
├── styles.css            # Estilos globais (500+ linhas)
└── [assets]

dist/                      # Build otimizado para produção
├── index.html
└── assets/
    ├── index-*.js       # React + app logic
    ├── gsap-*.js        # GSAP bundle
    ├── three-*.js       # Three.js bundle
    └── index-*.css      # CSS minificado
```

## 🚀 Getting Started

### Instalação

```bash
# Clone o repositório
git clone https://github.com/camillofranco/To-Do---Desenvolvimento-Inteligente.git
cd To-Do---Desenvolvimento-Inteligente

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

Saída otimizada em `dist/`

### Deploy no GitHub Pages

```bash
npm run build
git add dist/
git commit -m "deploy: build para produção"
git push origin main
```

## 🎨 Design System

### Cores
```css
--primary: #7f5af0      /* Roxo premium */
--secondary: #00d9ff    /* Ciano neon */
--accent: #ffb800       /* Âmbar para CTAs */
--dark-bg: #0a0e27      /* Fundo escuro */
```

### Tipografia
```css
Font Family: Inter (Google Fonts)
Weights: 400, 600, 700, 800
Line Height: 1.6
Letter Spacing: -1px a -2px em títulos
```

### Componentes
- `.cta-button` — Botões com gradiente e hover
- `.feature-card` — Cards com border, backdrop-filter
- `.section-title` — Títulos com responsive font-size
- `.badge` — Badges com glassmorphism

## 📊 Performance

| Métrica | Valor |
|---------|-------|
| **Build Size** | 788 KB (dist/) |
| **Gzip CSS** | 2.30 KB |
| **Gzip JS (app)** | 81.82 KB |
| **Gzip JS (three)** | 113.39 KB |
| **Total Gzip** | ~200 KB |
| **Lighthouse** | 95+ (target) |
| **Core Web Vitals** | Optimized |

## 🔧 Configurações

### vite.config.js
- Base path: `/To-Do---Desenvolvimento-Inteligente/`
- Output: `dist/`
- Code splitting: `three`, `gsap` separados
- Minify: Terser

### package.json
- Type: `module` (ES modules)
- Node.js: 18+
- npm: 9+

## 🎬 Seções do Site

### 1. Hero (100vh)
- WebGL background com partículas interativas
- Headline animado com gradient
- 2 CTAs (Primary + Secondary)
- Stats grid (500+ empresas, 2M+ atendimentos, 99.9% uptime)
- Scroll hint com animação

### 2. Features (4 cards)
- Icon com gradiente
- Title + description
- Hover effects em 3D
- ScrollTrigger animations

### 3. Process (4 steps)
- Timeline visual com números
- Scrub animation (scroll-driven)
- Arrows conectando steps
- Responsive grid

### 4. CTA Section
- Headline + form
- Email input com icon
- "Agendar Demo" button
- Subtext de urgência

### 5. Footer
- Brand info
- Links (Produto, Empresa, Redes)
- Social icons
- Copyright + legal links

## 🌟 Próximas Melhorias

- [ ] Adicionar página de Case Studies
- [ ] Implementar Blog com MDX
- [ ] Dark/Light mode toggle
- [ ] Analytics (Google Analytics 4)
- [ ] Email form integration (SendGrid/Mailgun)
- [ ] Video background no Hero
- [ ] More 3D scenes (Three.js models)
- [ ] Performance monitoring (Sentry)

## 📈 SEO & Marketing

- ✅ Meta tags otimizadas
- ✅ Open Graph tags
- ✅ Favicon
- ✅ robots.txt
- ✅ Sitemap.xml (a adicionar)
- ✅ Structured data (schema.org - a adicionar)

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

MIT License - veja LICENSE.md

## 👤 Autor

Desenvolvido por **Camillo Franco**
- GitHub: [@camillofranco](https://github.com/camillofranco)
- Email: camillo.samcro@gmail.com

## 🙋 Suporte

Para dúvidas ou sugestões, abra uma issue no repositório.

---

**Desenvolvido com ❤️ + ⚡ + 🎨**
