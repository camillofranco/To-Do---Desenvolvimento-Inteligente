import React from 'react'
import { Linkedin, Twitter, Mail, Github } from 'lucide-react'

export default function FooterAdvanced() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-advanced">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <img src="/logo.png" alt="To,Do" className="footer-logo" />
            <p>IA premium de próxima geração para atendimento ao cliente.</p>
          </div>

          <div className="footer-section">
            <h4>Produto</h4>
            <ul>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#security">Segurança</a>
              </li>
              <li>
                <a href="#api">API Docs</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Empresa</h4>
            <ul>
              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#careers">Carreiras</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Seguir</h4>
            <div className="social-links">
              <a href="#" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="mailto:todofacilitiesoficial@gmail.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} To,Do. Todos os direitos reservados.</p>
          <div className="footer-links">
            <a href="#privacy">Privacidade</a>
            <a href="#terms">Termos</a>
            <a href="#cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
