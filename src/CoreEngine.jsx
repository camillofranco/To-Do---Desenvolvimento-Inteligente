import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './core-engine.css';

const labels = [
  ['Sites premium', 'experiências digitais que vendem', 'l1'],
  ['WebApps', 'sistemas, portais e operação', 'l2'],
  ['IA aplicada', 'agentes, leitura e execução', 'l3'],
  ['Dashboards', 'dados vivos para decisão', 'l4']
];

function geoPoint(lat, lon, r = 1) {
  const phi = (90 - lat) * Math.PI / 180;
  const theta = (lon + 180) * Math.PI / 180;
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
}

function arc(a, b, lift = 1.1) {
  const mid = a.clone().add(b).multiplyScalar(0.5).normalize().multiplyScalar(lift);
  return new THREE.BufferGeometry().setFromPoints(new THREE.QuadraticBezierCurve3(a, mid, b).getPoints(90));
}

export default function CoreEngine() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0.45, 0.04, 5.2);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.55));
    mount.appendChild(renderer.domElement);

    const root = new THREE.Group();
    root.rotation.set(-0.08, -0.42, 0.02);
    scene.add(root);

    scene.add(new THREE.AmbientLight(0x7df8ff, 0.9));
    const key = new THREE.PointLight(0x7df8ff, 7, 12);
    key.position.set(-3.5, 3, 4.8);
    scene.add(key);

    const globe = new THREE.Mesh(
      new THREE.SphereGeometry(1.92, 128, 128),
      new THREE.MeshPhongMaterial({
        color: 0x071f2a,
        transparent: true,
        opacity: 0.50,
        shininess: 95,
        emissive: 0x052a34,
        emissiveIntensity: 0.52,
        specular: 0x9dfbff
      })
    );
    root.add(globe);

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(2.02, 96, 96),
      new THREE.MeshBasicMaterial({ color: 0x66f6ff, transparent: true, opacity: 0.09, side: THREE.BackSide })
    );
    root.add(atmosphere);

    const land = [[52,13],[48,2],[40,-74],[37,-122],[-23,-46],[-34,-58],[1,103],[35,139],[25,55],[28,77],[51,0],[19,72],[-33,151],[-26,28],[55,37],[39,116]];
    const dotCount = 2300;
    const dotPos = new Float32Array(dotCount * 3);
    const dotCol = new Float32Array(dotCount * 3);
    for (let i = 0; i < dotCount; i++) {
      const seed = land[i % land.length];
      const lat = seed[0] + (Math.random() - 0.5) * 18;
      const lon = seed[1] + (Math.random() - 0.5) * 32;
      const p = geoPoint(lat, lon, 2.03 + Math.random() * 0.016);
      const k = i * 3;
      dotPos[k] = p.x; dotPos[k + 1] = p.y; dotPos[k + 2] = p.z;
      dotCol[k] = Math.random() > 0.1 ? 0.22 : 1;
      dotCol[k + 1] = 0.92;
      dotCol[k + 2] = 1;
    }
    const dotGeo = new THREE.BufferGeometry();
    dotGeo.setAttribute('position', new THREE.BufferAttribute(dotPos, 3));
    dotGeo.setAttribute('color', new THREE.BufferAttribute(dotCol, 3));
    const dots = new THREE.Points(dotGeo, new THREE.PointsMaterial({ size: 0.014, vertexColors: true, transparent: true, opacity: 0.92 }));
    root.add(dots);

    const arcGroup = new THREE.Group();
    const cyan = new THREE.LineBasicMaterial({ color: 0x66f6ff, transparent: true, opacity: 0.42 });
    const pink = new THREE.LineBasicMaterial({ color: 0xff4ddb, transparent: true, opacity: 0.28 });
    for (let i = 0; i < 36; i++) {
      const a = geoPoint(...land[i % land.length], 2.06);
      const b = geoPoint(...land[(i * 5 + 3) % land.length], 2.06);
      arcGroup.add(new THREE.Line(arc(a, b, 2.65 + Math.random() * 0.7), i % 4 ? cyan : pink));
    }
    root.add(arcGroup);

    const ringGroup = new THREE.Group();
    [[2.55,0x2e8cff,.62],[3.02,0xff4ddb,.38],[3.55,0x66f6ff,.22]].forEach(([r,c,o],i)=>{
      const m = new THREE.Mesh(new THREE.TorusGeometry(r, 0.01, 12, 260), new THREE.MeshBasicMaterial({ color:c, transparent:true, opacity:o }));
      m.rotation.set(1.25 + i*.16, i*.18, i*.32);
      ringGroup.add(m);
    });
    root.add(ringGroup);

    const beams = new THREE.Group();
    const beamTargets = [new THREE.Vector3(-3.1,1.35,.1), new THREE.Vector3(3.0,.9,.1), new THREE.Vector3(-3.0,-1.35,.1), new THREE.Vector3(2.9,-1.25,.1)];
    beamTargets.forEach((target,i)=>{
      const start = new THREE.Vector3((i%2?1:-1)*1.7, i<2?.55:-.55, .2);
      const g = new THREE.BufferGeometry().setFromPoints([start,target]);
      beams.add(new THREE.Line(g, new THREE.LineBasicMaterial({ color:i%2?0xff4ddb:0x66f6ff, transparent:true, opacity:.42 })));
    });
    root.add(beams);

    const flowCount = 430;
    const flowPos = new Float32Array(flowCount * 3);
    const flowData = Array.from({ length: flowCount }, () => ({ a: Math.random() * Math.PI * 2, r: 2.2 + Math.random() * 1.65, z: (Math.random() - 0.5) * 1.5, s: 0.004 + Math.random() * 0.014 }));
    const flowGeo = new THREE.BufferGeometry();
    flowGeo.setAttribute('position', new THREE.BufferAttribute(flowPos, 3));
    const flow = new THREE.Points(flowGeo, new THREE.PointsMaterial({ size: 0.027, color: 0x66f6ff, transparent: true, opacity: 0.86 }));
    root.add(flow);

    const mouse = { x: 0, y: 0 };
    const onMove = (event) => {
      const b = mount.getBoundingClientRect();
      mouse.x = ((event.clientX - b.left) / b.width - 0.5) * 2;
      mouse.y = ((event.clientY - b.top) / b.height - 0.5) * 2;
    };
    const resize = () => {
      const w = mount.clientWidth || 980;
      const h = mount.clientHeight || 760;
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
      root.rotation.y += ((mouse.x * 0.24) - root.rotation.y - .32) * 0.025;
      root.rotation.x += ((-mouse.y * 0.10) - root.rotation.x - .06) * 0.025;
      globe.rotation.y = time * 0.08;
      dots.rotation.y = time * 0.075;
      arcGroup.rotation.y = time * 0.06;
      ringGroup.children.forEach((r,i)=>{ r.rotation.z += (i%2?-1:1) * (0.002 + i*0.001); });
      beams.rotation.y = Math.sin(time*.6)*0.03;

      const arr = flowGeo.attributes.position.array;
      for (let i = 0; i < flowCount; i++) {
        const p = flowData[i];
        p.a += p.s;
        const k = i * 3;
        arr[k] = Math.cos(p.a) * p.r;
        arr[k + 1] = Math.sin(p.a) * p.r * 0.36;
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
    <div className="coreEnginePro finalCore">
      <div className="coreCanvas" ref={mountRef} />
      <div className="coreCenter">To,Do<br />Engine</div>
      {labels.map(([title, desc, cls]) => (
        <div className={`coreService ${cls}`} key={title}>
          <strong>{title}</strong>
          <span>{desc}</span>
        </div>
      ))}
    </div>
  );
}
