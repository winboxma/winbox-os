"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

function AuroraField() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.15) * 0.05;
  });

  return (
    <group>
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
        <Sphere args={[1.8, 64, 64]} position={[-2, 1, -2]}>
          <MeshDistortMaterial
            color="#0066FF"
            speed={2}
            distort={0.3}
            radius={1}
            opacity={0.04}
            transparent
          />
        </Sphere>
      </Float>
      <Float speed={0.8} rotationIntensity={0.3} floatIntensity={0.4}>
        <Sphere args={[2.5, 64, 64]} position={[2, -1, -3]}>
          <MeshDistortMaterial
            color="#5E5CE6"
            speed={1.5}
            distort={0.4}
            radius={1}
            opacity={0.03}
            transparent
          />
        </Sphere>
      </Float>
      <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.6}>
        <Sphere args={[1.5, 64, 64]} position={[0, -2, -1]}>
          <MeshDistortMaterial
            color="#8B5CF6"
            speed={2}
            distort={0.2}
            radius={1}
            opacity={0.02}
            transparent
          />
        </Sphere>
      </Float>
    </group>
  );
}

function Particles() {
  const count = 30; // Reduced count
  const mesh = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 12;
      const y = (Math.random() - 0.5) * 12;
      const z = (Math.random() - 0.5) * 6;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.02; // Very slow
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.05;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.01}
        color="#0066FF"
        transparent
        opacity={0.15}
        sizeAttenuation
      />
    </points>
  );
}

export function SpatialBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden" style={{ background: "var(--bg-page)" }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <AuroraField />
        <Particles />
      </Canvas>
      <div 
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{ background: "radial-gradient(circle at center, transparent 0%, var(--bg-page) 100%)" }}
      />
    </div>
  );
}
