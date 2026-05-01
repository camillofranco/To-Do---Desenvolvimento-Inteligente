import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>To,Do</h4>
            <p>IA para atendimento ao cliente em outro nível.</p>
          </div>
          
          <div className="footer-section">
            <h4>Produto</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#process">Como Funciona</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#careers">Carreiras</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Redes</h4>
            <div className="social-links">
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" aria-label="GitHub"><Github size={20} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 To,Do. Todos os direitos reservados.</p>
          <div className="footer-links">
            <a href="#privacy">Privacidade</a>
            <a href="#terms">Termos</a>
            <a href="#contact">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
