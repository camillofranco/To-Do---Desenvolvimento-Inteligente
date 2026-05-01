# PRD — To,Do — Desenvolvimento Inteligente

## Original Problem Statement
Site institucional em PT-BR para "To,Do — Desenvolvimento Inteligente". Após primeira iteração (tema claro), usuário solicitou redesign radical: WebGL, scroll interactions, estética tecnológica/revolucionária, foto do fundador (Camillo — CEO) com efeitos cinematográficos, logo da empresa.

## User Choices (final)
- Nome: "To,Do — Desenvolvimento Inteligente"
- Tagline: "Automatize. Conecte. Evolua."
- Foco: Desenvolvimento sob medida + IA/automação
- Fundador: Camillo — CEO & Fundador
- WebGL intensity: Full (partículas + blob interativo)
- Paleta: Preto profundo + azul elétrico + cyan + branco
- Contato: salva no MongoDB (sem envio de email ainda)
- Idioma: PT-BR

## Architecture
- Backend: FastAPI + Motor (MongoDB async) — inalterado
- Frontend: React 19 + Tailwind + **Three.js (vanilla)** + **Lenis** smooth scroll + **framer-motion**
- Fonts: Instrument Serif (italic editorial), Space Grotesk (display), Inter Tight (body), JetBrains Mono (labels), Nanum Pen Script (script)
- Visual-edits babel plugin conflita com @react-three/fiber → usamos three.js imperativo

## Backend endpoints
- `GET /api/projects` (6 mocked)
- `GET /api/services` (6 mocked)
- `POST /api/contact` (salva em `contacts`, valida EmailStr)
- `GET /api/contact` (lista; **pública — proteger em prod**)

## Frontend sections
- `Navbar` — logo real, CTA "Fale conosco"
- `Hero` — WebGL scene (icosaedro deformado + wireframe + partículas + mouse parallax) + headline split-reveal char-by-char
- `Marquee` — stack scroll infinito
- `Work` — 6 cards com 3D tilt perspective on mouse move
- `Services` — cards com glow azul on hover
- `Founder` — portrait do Camillo com duotone azul, HUD overlay, parallax scroll, assinatura Nanum Pen Script
- `Stats` — 4 counters animados (easing cubic)
- `Contact` — form dark com corner accents (neon blue/cyan)
- `Footer` — grande branding + logo real

## Globals
- `SmoothScroll` (Lenis) — interpolação de scroll e `scrollTo` em âncoras
- `CustomCursor` — dot + ring com mix-blend-difference e hover scale
- `ScrollProgress` — barra gradient blue→cyan no topo

## What's been implemented
### 2025-12 (iteration 1)
- Tema claro inicial, layout editorial minimalista
- Backend /api/projects /api/services /api/contact

### 2026-05 (iteration 2 — redesign)
- Migração total para tema dark (preto/azul/cyan)
- WebGL cena 3D vanilla three.js com shader customizado (simplex noise para displacement de vértices, recomputação de normais no shader)
- Wireframe dodecaedro externo + núcleo glow aditivo
- Lenis smooth scroll + Custom Cursor + Scroll Progress
- Split reveal character animation no título
- 3D tilt nos cards de projetos
- Stats section com counters animados
- Founder section dedicado com foto Camillo duotone + parallax scroll
- Testing agent: 100% backend (9/9) + 100% frontend (todos os fluxos verificados, 0 erros de console)

## Prioritized backlog
### P0 (segurança/prod)
- [ ] Proteger `GET /api/contact` (PII exposta) — auth admin
- [ ] CORS: trocar `*` por origins específicas em produção

### P1
- [ ] Integração de email (Resend/SendGrid) no POST /api/contact
- [ ] SEO: meta tags, OpenGraph, favicon baseado no logo, sitemap
- [ ] Rota /admin para consultar leads (autenticada)

### P2
- [ ] Páginas de case study individuais
- [ ] Cenas WebGL distintas por seção (shaders por section)
- [ ] Multi-idioma (EN/ES)
- [ ] Integração analytics (Plausible/GA)
- [ ] Dark/light toggle opcional

## Next tasks
1. Integrar Resend (quando usuário fornecer API key + email de destino)
2. Auth admin para proteger `/api/contact` e criar painel de leads
3. Meta tags + favicon To,Do + OpenGraph card
