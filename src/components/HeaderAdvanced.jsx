import React from 'react'
import { Menu } from 'lucide-react'

export default function HeaderAdvanced() {
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <header className="header-advanced">
      <div className="container">
        <div className="header-content">
          <div className="header-logo">
            <img src="/logo.png" alt="To,Do" className="logo-img" />
          </div>

          <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
            <a href="#features">Features</a>
            <a href="#about">Sobre</a>
            <a href="#pricing">Pricing</a>
            <a href="#blog">Blog</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="header-cta">
            <button className="btn btn-primary-small">
              Comece Agora
            </button>
          </div>

          <button
            className="header-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  )
}
