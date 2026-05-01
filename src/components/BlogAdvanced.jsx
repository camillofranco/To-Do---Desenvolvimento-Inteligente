import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Calendar, User } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const posts = [
  {
    id: 1,
    title: 'IA: O Futuro do Atendimento ao Cliente',
    excerpt: 'Como machine learning está transformando a forma como as empresas interagem com clientes...',
    date: '15 Abr 2024',
    author: 'Camillo Franco',
    category: 'IA',
  },
  {
    id: 2,
    title: 'Casos de Sucesso: Redução de 70% em Custos',
    excerpt: 'Veja como empresas líderes estão economizando milhões com automação inteligente...',
    date: '10 Abr 2024',
    author: 'Camillo Franco',
    category: 'Cases',
  },
  {
    id: 3,
    title: 'Segurança e Compliance em Chatbots IA',
    excerpt: 'Garantindo LGPD, PCI-DSS e segurança de dados em automações de atendimento...',
    date: '05 Abr 2024',
    author: 'Camillo Franco',
    category: 'Segurança',
  },
]

export default function BlogAdvanced() {
  const ref = useRef(null)

  useEffect(() => {
    const posts = ref.current?.querySelectorAll('.blog-post')
    if (!posts) return

    posts.forEach((post, i) => {
      gsap.fromTo(
        post,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: post,
            start: 'top 85%',
          },
        }
      )
    })
  }, [])

  return (
    <section ref={ref} className="blog-advanced">
      <div className="container">
        <h2 className="section-title">
          Blog & <span className="gradient-text">Resources</span>
        </h2>

        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post.id} className="blog-post">
              <div className="post-category">{post.category}</div>
              
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>

              <div className="post-meta">
                <span className="meta-item">
                  <Calendar size={16} />
                  {post.date}
                </span>
                <span className="meta-item">
                  <User size={16} />
                  {post.author}
                </span>
              </div>

              <a href="#" className="read-more">
                Ler Mais
                <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
