import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function WebGLScene() {
  const containerRef = useRef(null)
  const sceneRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Setup
    const width = containerRef.current.clientWidth
    const height = containerRef.current.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(width, height)
    renderer.setClearColor(0x0a0e27, 0)
    containerRef.current.appendChild(renderer.domElement)

    camera.position.z = 50

    // Criar partículas
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 500

    const posArray = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 200
      posArray[i + 1] = (Math.random() - 0.5) * 200
      posArray[i + 2] = (Math.random() - 0.5) * 200
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 2,
      color: 0x7f5af0,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
    })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    // Adicionar luz
    const light = new THREE.PointLight(0xffffff, 1, 100)
    light.position.set(50, 50, 50)
    scene.add(light)

    // Animar
    let mouse = { x: 0, y: 0 }
    document.addEventListener('mousemove', (e) => {
      mouse.x = (e.clientX / width) * 2 - 1
      mouse.y = -(e.clientY / height) * 2 + 1
    })

    const animate = () => {
      requestAnimationFrame(animate)

      particles.rotation.x += 0.0001
      particles.rotation.y += 0.0002

      // Movimento do mouse
      particles.rotation.x += mouse.y * 0.005
      particles.rotation.y += mouse.x * 0.005

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      const newWidth = containerRef.current.clientWidth
      const newHeight = containerRef.current.clientHeight
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'absolute' }} />
}
