import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const labels = [
  ['Sites premium', 'experiências digitais que vendem', 'l1'],
  ['WebApps', 'sistemas, portais e operação', 'l2'],
  ['IA aplicada', 'agentes, leitura e execução', 'l3'],
  ['Dashboards', 'dados vivos para decisão', 'l4']
];

function pointOnSphere(lat, lon, r = 1) {
  const phi = (90 - lat) * Math.PI / 180;
  const theta = (lon + 180) * Math.PI / 180;
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
}

function makeArc(a, b, height = 0.62) {
  const mid = a.clone().add(b).multiplyScalar(0.5).normalize().multiplyScalar(1.85 + height);
  const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
  return new THREE.BufferGeometry().setFromPoints(curve.getPoints(64));
}

export default function CoreEngine() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0.12, 6.1);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.65));
    mount.appendChild(renderer.domElement);

    const root = new THREE.Group();
    root.rotation.set(-0.08, -0.22, 0.02);
    scene.add(root);

    scene.add(new THREE.AmbientLight(0x66f6ff, 0.7));
    const light = new THREE.PointLight(0x66f6ff, 5.2, 12);
    light.position.set(-2.8, 2.6, 4.4);
    scene.add(light);

    const globe = new THREE.Mesh(
      new THREE.SphereGeometry(1.68, 96, 96),
      new THREE.MeshPhongMaterial({
        color: 0x0b2630,
        transparent: true,
        opacity: 0.42,
        shininess: 80,
        emissive: 0x063946,
        emissiveIntensity: 0.42,
        specular: 0x9dfbff
      })
    );
    root.add(globe);

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.75, 96, 96),
      new THREE.MeshBasicMaterial({ color: 0x66f6ff, transparent: true, opacity: 0.075, side: THREE.BackSide })
    );
    root.add(atmosphere);

    const dotCount = 1450;
    const dotPos = new Float32Array(dotCount * 3);
    const dotCol = new Float32Array(dotCount * 3);
    for (let i = 0; i < dotCount; i++) {
      const lat = -68 + Math.random() * 136;
      const lon = -180 + Math.random() * 360;
      const p = pointOnSphere(lat, lon, 1.72 + Math.random() * 0.018);
      const k = i * 3;
      dotPos[k] = p.x; dotPos[k + 1] = p.y; dotPos[k + 2] = p.z;
      dotCol[k] = Math.random() > 0.18 ? 0.25 : 1;
      dotCol[k + 1] = 0.92;
      dotCol[k + 2] = 1;
    }
    const dotGeo = new THREE.BufferGeometry();
    dotGeo.setAttribute('position', new THREE.BufferAttribute(dotPos, 3));
    dotGeo.setAttribute('color', new THREE.BufferAttribute(dotCol, 3));
    const dots = new THREE.Points(dotGeo, new THREE.PointsMaterial({ size: 0.012, vertexColors: true, transparent: true, opacity: 0.82 }));
    root.add(dots);

    const arcMat = new THREE.LineBasicMaterial({ color: 0x66f6ff, transparent: true, opacity: 0.34 });
    const magentaMat = new THREE.LineBasicMaterial({ color: 0xff4ddb, transparent: true, opacity: 0.26 });
    const arcGroup = new THREE.Group();
    const cities = [[-23,-46],[40,-74],[51,0],[35,139],[-33,151],[1,103],[25,55],[52,13],[37,-122],[-34,-58]];
    for (let i = 0; i < 22; i++) {
      const a = pointOnSphere(...cities[i % cities.length], 1.78);
      const b = pointOnSphere(...cities[(i * 3 + 4) % cities.length], 1.78);
      arcGroup.add(new THREE.Line(makeArc(a, b, Math.random() * 0.6), i % 3 ? arcMat : magentaMat));
    }
    root.add(arcGroup);

    const ringGroup = new THREE.Group();
    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(2.15, 0.009, 10, 220), new THREE.MeshBasicMaterial({ color: 0x2e8cff, transparent: true, opacity: 0.62 }));
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.55, 0.008, 10, 220), new THREE.MeshBasicMaterial({ color: 0xff4ddb, transparent: true, opacity: 0.42 }));
    const ring3 = new THREE.Mesh(new THREE.TorusGeometry(3.05, 0.006, 10, 220), new THREE.MeshBasicMaterial({ color: 0x66f6ff, transparent: true, opacity: 0.24 }));
    ring1.rotation.x = 1.34; ring1.rotation.z = 0.12;
    ring2.rotation.x = 1.18; ring2.rotation.y = 0.2; ring2.rotation.z = -0.22;
    ring3.rotation.x = 1.48; ring3.rotation.y = -0.26; ring3.rotation.z = 0.62;
    ringGroup.add(ring1, ring2, ring3);
    root.add(ringGroup);

    const flowCount = 280;
    const flowPos = new Float32Array(flowCount * 3);
    const flowData = [];
    for (let i = 0; i < flowCount; i++) {
      flowData.push({ a: Math.random() * Math.PI * 2, r: 2.0 + Math.random() * 1.35, z: (Math.random() - 0.5) * 1.2, s: 0.004 + Math.random() * 0.012 });
    }
    const flowGeo = new THREE.BufferGeometry();
    flowGeo.setAttribute('position', new THREE.BufferAttribute(flowPos, 3));
    const flow = new THREE.Points(flowGeo, new THREE.PointsMaterial({ size: 0.024, color: 0x66f6ff, transparent: true, opacity: 0.85 }));
    root.add(flow);

    const mouse = { x: 0, y: 0 };
    const onMove = (event) => {
      const b = mount.getBoundingClientRect();
      mouse.x = ((event.clientX - b.left) / b.width - 0.5) * 2;
      mouse.y = ((event.clientY - b.top) / b.height - 0.5) * 2;
    };
    const resize = () => {
      const w = mount.clientWidth || 620;
      const h = mount.clientHeight || 560;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    mount.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('resize', resize);
    resize();

    let raf;
    const animate = (t = 0) => {
      const time = t * 0.001;
      root.rotation.y += ((mouse.x * 0.22) - root.rotation.y) * 0.025;
      root.rotation.x += ((-mouse.y * 0.10) - root.rotation.x) * 0.025;
      globe.rotation.y = time * 0.11;
      dots.rotation.y = time * 0.08;
      arcGroup.rotation.y = time * 0.06;
      ring1.rotation.z += 0.0035;
      ring2.rotation.z -= 0.0028;
      ring3.rotation.z += 0.0016;

      const arr = flowGeo.attributes.position.array;
      for (let i = 0; i < flowCount; i++) {
        const p = flowData[i];
        p.a += p.s;
        const k = i * 3;
        arr[k] = Math.cos(p.a) * p.r;
        arr[k + 1] = Math.sin(p.a) * p.r * 0.34;
        arr[k + 2] = p.z + Math.sin(time + i) * 0.08;
      }
      flowGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      mount.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', resize);
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
      renderer.dispose();
      dotGeo.dispose();
      flowGeo.dispose();
    };
  }, []);

  return (
    <div className="coreEnginePro">
      <div className="coreCanvas" ref={mountRef} />
      <div className="coreCenter">To,Do<br/>Engine</div>
      {labels.map(([title, desc, cls]) => (
        <div className={`coreService ${cls}`} key={title}>
          <strong>{title}</strong>
          <span>{desc}</span>
        </div>
      ))}
    </div>
  );
}
