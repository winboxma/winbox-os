"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sphere, Line } from "@react-three/drei";
import * as THREE from "three";

// Convert lat/lng to 3D point on sphere
function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

// Create arc points between two locations
function createArc(
  start: THREE.Vector3,
  end: THREE.Vector3,
  segments = 64,
  arcHeight = 0.3
): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const pt = new THREE.Vector3().lerpVectors(start, end, t);
    pt.normalize().multiplyScalar(1 + arcHeight * Math.sin(Math.PI * t));
    points.push(pt);
  }
  return points;
}

const GLOBE_RADIUS = 1;

const markers = [
  { lat: 34.0, lng: -6.8, label: "Morocco", color: "#0066FF" },
  { lat: 12.4, lng: -2.0, label: "West Africa", color: "#5E5CE6" },
  { lat: 48.8, lng: 2.3, label: "Europe", color: "#10B981" },
  { lat: 25.2, lng: 55.3, label: "Middle East", color: "#06B6D4" },
];

const arcs = [
  { from: 0, to: 1 },
  { from: 0, to: 2 },
  { from: 0, to: 3 },
];

function GlobeMarker({ position, color }: { position: THREE.Vector3; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(1 + 0.3 * Math.sin(clock.elapsedTime * 2 + position.x));
    }
  });

  return (
    <group position={position}>
      {/* Core dot */}
      <Sphere ref={meshRef} args={[0.025, 16, 16]}>
        <meshBasicMaterial color={color} />
      </Sphere>
      {/* Glow ring */}
      <Sphere args={[0.04, 16, 16]}>
        <meshBasicMaterial color={color} transparent opacity={0.15} />
      </Sphere>
    </group>
  );
}

function GlobeArc({ points, color, delay = 0 }: { points: THREE.Vector3[]; color: string; delay?: number }) {
  const ref = useRef<any>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      const t = ((clock.elapsedTime + delay) % 3) / 3;
      ref.current.material.dashOffset = 1 - t;
    }
  });

  return (
    <Line
      ref={ref}
      points={points}
      color={color}
      lineWidth={1.5}
      transparent
      opacity={0.6}
      dashed
      dashSize={0.06}
      gapSize={0.04}
    />
  );
}

function RotatingGlobe() {
  const groupRef = useRef<THREE.Group>(null);

  // Position vectors for markers
  const markerPositions = useMemo(() =>
    markers.map(m => latLngToVector3(m.lat, m.lng, GLOBE_RADIUS + 0.005)),
    []
  );

  // Arc paths
  const arcPaths = useMemo(() =>
    arcs.map(arc => ({
      points: createArc(
        latLngToVector3(markers[arc.from].lat, markers[arc.from].lng, GLOBE_RADIUS),
        latLngToVector3(markers[arc.to].lat, markers[arc.to].lng, GLOBE_RADIUS),
        64,
        0.35
      ),
      color: markers[arc.to].color,
    })),
    []
  );

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Globe sphere */}
      <Sphere args={[GLOBE_RADIUS, 64, 64]}>
        <meshStandardMaterial
          color="#FFFFFF"
          roughness={0.2}
          metalness={0.1}
          transparent
          opacity={0.9}
        />
      </Sphere>

      {/* Wireframe overlay */}
      <Sphere args={[GLOBE_RADIUS + 0.001, 32, 32]}>
        <meshBasicMaterial
          color="#0066FF"
          transparent
          opacity={0.02}
          wireframe
        />
      </Sphere>

      {/* Atmosphere glow */}
      <Sphere args={[GLOBE_RADIUS + 0.06, 64, 64]}>
        <meshBasicMaterial
          color="#0066FF"
          transparent
          opacity={0.02}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Markers */}
      {markerPositions.map((pos, i) => (
        <GlobeMarker key={i} position={pos} color={markers[i].color} />
      ))}

      {/* Arcs */}
      {arcPaths.map((arc, i) => (
        <GlobeArc key={i} points={arc.points} color={arc.color} delay={i * 1} />
      ))}
    </group>
  );
}

export function GlobeCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 2.8], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      {/* Lighting */}
      <ambientLight intensity={1.5} color="#FFFFFF" />
      <pointLight position={[4, 4, 4]} intensity={1.5} color="#0066FF" />
      <pointLight position={[-4, -2, -4]} intensity={1} color="#5E5CE6" />
      <pointLight position={[0, -4, 2]} intensity={0.5} color="#8E8E93" />

      <RotatingGlobe />
    </Canvas>
  );
}
