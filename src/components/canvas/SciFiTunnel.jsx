import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import * as THREE from "three";

// ── Wall Panel: a bright metallic panel with a glowing neon edge ──
const WallPanel = ({ position, rotation, width = 4, height = 6, glowSide = "right" }) => {
  return (
    <group position={position} rotation={rotation}>
      {/* Main panel surface: bright silver/white */}
      <mesh>
        <planeGeometry args={[width, height]} />
        <meshStandardMaterial
          color="#c8ccd0"
          metalness={0.6}
          roughness={0.15}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Subtle inner bevel / darker inset */}
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[width * 0.85, height * 0.88]} />
        <meshStandardMaterial
          color="#b0b5ba"
          metalness={0.7}
          roughness={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Glowing neon edge strip */}
      <mesh position={[glowSide === "right" ? width / 2 : -width / 2, 0, 0.05]}>
        <planeGeometry args={[0.08, height * 0.9]} />
        <meshBasicMaterial color="#80d4ff" />
      </mesh>
      {/* Glow bloom around the edge strip */}
      <mesh position={[glowSide === "right" ? width / 2 : -width / 2, 0, 0.04]}>
        <planeGeometry args={[0.5, height * 0.9]} />
        <meshBasicMaterial color="#40a0ff" transparent opacity={0.12} />
      </mesh>
    </group>
  );
};

// ── Ceiling light strip ──
const CeilingLight = ({ z }) => {
  return (
    <group position={[0, 5.5, z]}>
      {/* Bright emissive strip */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[6, 0.3]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      {/* Glow aura */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <planeGeometry args={[8, 1.2]} />
        <meshBasicMaterial color="#b0d8ff" transparent opacity={0.08} />
      </mesh>
    </group>
  );
};

// ── The full spaceship corridor ──
const SpaceshipCorridor = () => {
  const segments = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 18; i++) {
      arr.push(-i * 6);
    }
    return arr;
  }, []);

  return (
    <>
      {/* ── Lighting ── */}
      {/* Bright ambient to simulate the luminous white interior */}
      <ambientLight intensity={0.7} />
      {/* Key directional light from above/front */}
      <directionalLight position={[0, 8, 15]} intensity={1.2} color="#ffffff" />
      {/* Fill light from below for floor reflections */}
      <directionalLight position={[0, -3, 10]} intensity={0.3} color="#c0d8ff" />
      {/* Blue accent point lights along the corridor */}
      <pointLight position={[0, 4, 0]} intensity={0.4} color="#80d4ff" />
      <pointLight position={[0, 4, -30]} intensity={0.3} color="#60b0ff" />
      <pointLight position={[0, 4, -60]} intensity={0.2} color="#4090ff" />

      {/* ── Corridor segments ── */}
      {segments.map((z, idx) => {
        const opacity = Math.max(0.3, 1 - idx * 0.04);
        return (
          <group key={idx} position={[0, 0, z]}>
            {/* Left wall panels */}
            <WallPanel
              position={[-7, 1, 0]}
              rotation={[0, Math.PI / 2, 0]}
              width={5}
              height={7}
              glowSide="right"
            />
            {/* Right wall panels */}
            <WallPanel
              position={[7, 1, 0]}
              rotation={[0, -Math.PI / 2, 0]}
              width={5}
              height={7}
              glowSide="left"
            />
            {/* Ceiling light */}
            <CeilingLight z={0} />
            {/* Floor glowing line */}
            <mesh position={[0, -2.4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[0.06, 5]} />
              <meshBasicMaterial color="#80d4ff" transparent opacity={opacity * 0.4} />
            </mesh>
          </group>
        );
      })}

      {/* ── Polished mirror floor ── */}
      <mesh position={[0, -2.5, -50]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[14, 120]} />
        <meshPhysicalMaterial
          color="#1a1d22"
          metalness={0.95}
          roughness={0.02}
          clearcoat={1}
          clearcoatRoughness={0.03}
          reflectivity={1}
        />
      </mesh>

      {/* ── Ceiling panel ── */}
      <mesh position={[0, 6, -50]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[14, 120]} />
        <meshStandardMaterial color="#d0d4d8" metalness={0.5} roughness={0.3} />
      </mesh>

      {/* ── Back wall (vanishing point glow) ── */}
      <mesh position={[0, 1.5, -108]}>
        <planeGeometry args={[14, 9]} />
        <meshBasicMaterial color="#e8f0ff" />
      </mesh>
      {/* Soft bloom around back wall */}
      <mesh position={[0, 1.5, -107]}>
        <planeGeometry args={[16, 11]} />
        <meshBasicMaterial color="#a0c8ff" transparent opacity={0.15} />
      </mesh>

      {/* ── Fog for depth ── */}
      <fog attach="fog" args={["#e0e8f0", 20, 110]} />
    </>
  );
};

const SciFiTunnelCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 1.5]}
      camera={{ position: [0, 1.5, 16], fov: 55, near: 0.1, far: 150 }}
      gl={{ antialias: true, alpha: false }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    >
      <color attach="background" args={["#dce3ea"]} />
      <Suspense fallback={null}>
        <SpaceshipCorridor />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default SciFiTunnelCanvas;
