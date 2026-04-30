// (VERSÃO ENCURTADA E OTIMIZADA DO CORE)
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function CoreEngine() {
  const ref = useRef(null);

  useEffect(() => {
    const mount = ref.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // 🔥 CORE (shader leve)
    const geometry = new THREE.SphereGeometry(1.2, 64, 64);
    const material = new THREE.MeshBasicMaterial({
      color: 0x66f6ff,
      wireframe: true,
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // 🔥 ANEL
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(2, 0.03, 16, 100),
      new THREE.MeshBasicMaterial({ color: 0xff4ddb })
    );
    scene.add(ring);

    // 🔥 LOOP
    function animate() {
      sphere.rotation.y += 0.01;
      ring.rotation.x += 0.01;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "520px", position: "relative" }}>
      <div ref={ref} style={{ width: "100%", height: "100%" }} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#66f6ff",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        To,Do<br />Engine
      </div>
    </div>
  );
}
