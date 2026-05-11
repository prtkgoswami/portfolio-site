"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function GLSLHills() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // --- Scene Setup ---
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // --- Geometry & Shader ---
    // High-density grid for smooth hills
    const geometry = new THREE.PlaneGeometry(50, 50, 100, 100);
    
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color("rgb(131, 44, 211)") },
      },
      vertexShader: `
        uniform float uTime;
        varying float vElevation;
        void main() {
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          
          // The "Hill" Logic: Multiple sine waves for complexity
          float elevation = sin(modelPosition.x * 0.5 + uTime) * 0.5;
          elevation += sin(modelPosition.z * 0.8 + uTime * 0.5) * 0.3;
          
          modelPosition.y += elevation;
          vElevation = elevation;

          vec4 viewPosition = viewMatrix * modelPosition;
          gl_Position = projectionMatrix * viewPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        varying float vElevation;
        void main() {
          // Adjust brightness based on height for a glowing wireframe look
          float brightness = vElevation + 0.5;
          gl_FragColor = vec4(uColor * brightness, 0.8);
        }
      `,
      wireframe: true,
      transparent: true,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI * 0.5; // Lay it flat
    scene.add(mesh);

    camera.position.set(0, 2, 5);
    camera.lookAt(0, 0, 0);

    // --- Animation Loop ---
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      material.uniforms.uTime.value = elapsedTime;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // --- Resize Handler ---
    const handleResize = () => {
      const w = mountRef.current?.clientWidth || window.innerWidth;
      const h = mountRef.current?.clientHeight || window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // --- Cleanup ---
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      style={{ 
        position: "absolute", 
        inset: 0, 
        zIndex: -1, 
        pointerEvents: "none",
        // background: "radial-gradient(circle at 50% 40%, #0a1128 0%, #020617 100%)" 
        
        background: "radial-gradient(circle at 50% 100%, rgb(var(--background-rgb)) 10%, #020617 100%)" 
      }} 
    />
  );
}