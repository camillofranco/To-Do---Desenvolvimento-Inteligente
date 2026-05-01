// 🎨 LIQUID IA SHADER
// Experimental blob morphing with luxury gradient

varying vec2 vUv;
uniform float uTime;
uniform vec2 uMouse;
uniform float uProgress;

#include <common>

void main() {
  vec2 uv = vUv - 0.5;
  
  // Perlin noise para morphing
  float noise = sin(uTime * 0.3 + uv.x * 3.0) * cos(uTime * 0.2 + uv.y * 2.0);
  
  // Distance from center com distortion
  float dist = length(uv);
  dist += noise * 0.2;
  dist += length(uMouse - vec2(0.5)) * 0.3;
  
  // Smooth step para criar blob shape
  float blob = smoothstep(0.5, 0.3, dist);
  
  // Cores gradientes - Luxury palette
  vec3 color1 = vec3(0.55, 0.35, 0.93); // Purple
  vec3 color2 = vec3(0.42, 0.31, 0.94); // Deep purple
  vec3 color3 = vec3(0.0, 0.85, 1.0);   // Cyan
  
  // Mix colors based on noise
  vec3 col = mix(color1, color2, sin(uTime * 0.5 + dist * 5.0) * 0.5 + 0.5);
  col = mix(col, color3, blob * 0.4);
  
  // Add glow effect
  vec3 glow = col * blob * (1.0 + sin(uTime) * 0.3);
  
  gl_FragColor = vec4(glow, blob * 0.8);
}
