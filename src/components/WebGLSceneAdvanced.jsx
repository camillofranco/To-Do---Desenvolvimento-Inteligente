import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'

export default function WebGLSceneAdvanced() {
  const containerRef = useRef(null)
  const mousePos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!containerRef.current) return

    const width = containerRef.current.clientWidth
    const height = containerRef.current.clientHeight

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(width, height)
    renderer.setClearColor(0x0a0a0a, 0)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement)

    camera.position.z = 3

    // Vertex shader
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `

    // Fragment shader - Liquid IA
    const fragmentShader = `
      varying vec2 vUv;
      uniform float uTime;
      uniform vec2 uMouse;
      
      float noise(vec2 st) {
        return sin(st.x * 10.0 + uTime) * cos(st.y * 8.0 + uTime * 0.7) * 0.5 + 0.5;
      }
      
      void main() {
        vec2 uv = vUv - 0.5;
        
        // Blob shape
        float dist = length(uv);
        float blob = smoothstep(0.5, 0.2, dist);
        
        // Distortion baseado em mouse e tempo
        vec2 distort = (uMouse - 0.5) * 0.3;
        dist += noise(uv + distort) * 0.15;
        dist += sin(uTime * 0.3) * 0.1;
        
        blob = smoothstep(0.5, 0.15, dist);
        
        // Luxury gradient colors
        vec3 col1 = vec3(0.55, 0.35, 0.93); // Purple luxury
        vec3 col2 = vec3(0.42, 0.31, 0.94); // Deep purple
        vec3 col3 = vec3(0.0, 0.85, 1.0);   // Cyan tech
        
        // Color mixing
        vec3 col = mix(col1, col2, sin(uTime * 0.4 + dist * 8.0) * 0.5 + 0.5);
        col = mix(col, col3, blob * 0.3 + sin(uTime * 0.5) * 0.2);
        
        // Glow and opacity
        float alpha = blob * (0.7 + sin(uTime) * 0.2);
        vec3 glowCol = col * (1.0 + blob * 0.5);
        
        gl_FragColor = vec4(glowCol, alpha);
      }
    `

    // Create blob geometry
    const geometry = new THREE.PlaneGeometry(2, 2, 64, 64)
    
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Lighting
    const light = new THREE.PointLight(0xffffff, 1, 100)
    light.position.set(5, 5, 5)
    scene.add(light)

    // Mouse tracking
    const handleMouseMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      mousePos.current = {
        x: x / width,
        y: 1 - y / height,
      }
      material.uniforms.uMouse.value.set(mousePos.current.x, mousePos.current.y)
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    let frameId
    const animate = () => {
      frameId = requestAnimationFrame(animate)
      material.uniforms.uTime.value += 0.01
      
      mesh.rotation.z += 0.0002
      
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
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(frameId)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'absolute' }} />
}
