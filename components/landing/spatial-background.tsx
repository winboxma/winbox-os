"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

function AuroraField() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere args={[1.5, 64, 64]} position={[-2, 1, -2]}>
          <MeshDistortMaterial
            color="#2563EB"
            speed={3}
            distort={0.4}
            radius={1}
            opacity={0.08}
            transparent
          />
        </Sphere>
      </Float>
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.8}>
        <Sphere args={[2, 64, 64]} position={[2, -1, -3]}>
          <MeshDistortMaterial
            color="#8B5CF6"
            speed={2}
            distort={0.5}
            radius={1}
            opacity={0.06}
            transparent
          />
        </Sphere>
      </Float>
      <Float speed={2.5} rotationIntensity={0.3} floatIntensity={1.2}>
        <Sphere args={[1.2, 64, 64]} position={[0, -2, -1]}>
          <MeshDistortMaterial
            color="#06B6D4"
            speed={4}
            distort={0.3}
            radius={1}
            opacity={0.05}
            transparent
          />
        </Sphere>
      </Float>
    </group>
  );
}

function Particles() {
  const count = 40;
  const mesh = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 5;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.05;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
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
        size={0.015}
        color="#2563EB"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
}

export function SpatialBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#F7F8FC] pointer-events-none overflow-hidden">
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#F7F8FC_100%)] opacity-40" />
    </div>
  );
}
