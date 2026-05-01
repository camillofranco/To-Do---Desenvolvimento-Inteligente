# 🎨 Logo Setup - To,Do Premium Site

## Onde colocar o logo?

O site agora está pronto para exibir seu logo premium em dois lugares:

### 1. **Header (Navegação Topo)**
- Local: aparece na navegação fixa no topo
- Tamanho recomendado: ~50px de altura
- Formato: PNG ou SVG com fundo transparente

### 2. **Footer (Rodapé)**
- Local: seção inferior na marca da empresa
- Tamanho recomendado: ~40px de altura
- Formato: PNG ou SVG com fundo transparente

## 📁 Como instalar o logo

### Passo 1: Prepare seu arquivo de logo
- Nome do arquivo: `logo.png` ou `logo.svg`
- Recomendado: PNG com fundo transparente (não JPEG)
- Dimensões: mínimo 100×100px, máximo 500×500px
- Formato recomendado: PNG 1000×1000px (será redimensionado automaticamente)

### Passo 2: Copie para a pasta pública
```bash
# Copie seu logo para:
/public/logo.png

# Ou, se for SVG:
/public/logo.svg
```

### Passo 3: Atualiza o caminho (se necessário)
Se seu logo tem um nome diferente, edite os arquivos:

**src/components/HeaderAdvanced.jsx (linha 11)**
```jsx
<img src="/seu-logo-aqui.png" alt="To,Do" className="logo-img" />
```

**src/components/FooterAdvanced.jsx (linha 12)**
```jsx
<img src="/seu-logo-aqui.png" alt="To,Do" className="footer-logo" />
```

### Passo 4: Build e Deploy
```bash
# Faça o build
npm run build

# Copie arquivos para raiz
cp -r dist/* .

# Commit e push
git add .
git commit -m "feat: adiciona logo To,Do ao header e footer"
git push origin main
```

## 🎨 Recomendações de Design do Logo

Para o logo aparecer melhor no site premium:

✅ **Recomendado:**
- Fundo transparente (PNG com alpha)
- Formas claras e legíveis
- Cores que contratem com fundo escuro (#0A0A0A)
- Logo horizontal (mais largo que alto)
- Sem drop shadows (o site adiciona glow automático)

❌ **Evitar:**
- Fundos sólidos
- Muito pequeno ou muito grande
- Muitos detalhes finos
- Cores muito similares ao background

## 🌟 Efeitos Premium Automáticos

O logo recebe automaticamente:

**No Header:**
- ✨ Glow suave (drop-shadow com gold #D4AF37)
- 🎯 Escala 1.05x no hover
- 🌈 Glow aumenta no hover

**No Footer:**
- ✨ Glow suave similar
- 🎯 Escala 1.05x no hover
- 🌈 Efeito de "destaque" ao interagir

## 📊 Estatísticas de Logo

Os logos inteligentemente dimensionados:
- **Header**: altura máxima 50px
- **Footer**: altura máxima 40px
- **Ratio responsivo**: mantém proporção original
- **Cache browser**: otimizado para performance

## ✅ Checklist Final

- [ ] Arquivo de logo criado (logo.png ou logo.svg)
- [ ] Logo copiado para `/public/`
- [ ] Paths atualizados em HeaderAdvanced.jsx e FooterAdvanced.jsx
- [ ] Build executado: `npm run build`
- [ ] Arquivos copiados para raiz: `cp -r dist/* .`
- [ ] Git commit: `git add . && git commit -m "feat: logo"`
- [ ] Push: `git push origin main`
- [ ] ✅ Site atualiza em 1-2 minutos

---

**Pronto! Seu logo agora aparece de forma premium no site. 🎉**

*Para mais detalhes sobre customização, veja README.md*
