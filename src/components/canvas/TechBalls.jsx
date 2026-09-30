import React, { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Decal, Preload, useTexture } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";
import { technologies } from "../../constants";

// A single glossy white sphere with a skill icon decal
const SkillSphere = ({ icon, position, scale = 1.4 }) => {
  const [decal] = useTexture([icon]);
  const meshRef = useRef();

  // Gentle idle floating animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position} castShadow scale={scale}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhysicalMaterial
        color="#ffffff"
        metalness={0.05}
        roughness={0.05}
        clearcoat={1.0}
        clearcoatRoughness={0.05}
        reflectivity={0.8}
        polygonOffset
        polygonOffsetFactor={-5}
      />
      <Decal
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        scale={1}
        map={decal}
      />
    </mesh>
  );
};

const TechBalls = () => {
  const spheres = useMemo(() => {
    const count = technologies.length;

    // Distribute spheres in two gentle arcs on left and right sides
    // This keeps the center completely clear for the hero text
    return technologies.map((tech, index) => {
      const isLeft = index % 2 === 0;
      const row = Math.floor(index / 2);
      const totalPerSide = Math.ceil(count / 2);

      // Vertical spread: distribute evenly from top to bottom
      const ySpread = 14; // Total vertical range
      const yStart = 6;   // Top position
      const y = yStart - (row / (totalPerSide - 1)) * ySpread;

      // X position: push to far left or right side, stagger slightly
      const xBase = isLeft ? -16 : 16;
      const xOffset = (Math.sin(row * 0.8) * 1.2); // Gentle wave
      const x = xBase + (isLeft ? -xOffset : xOffset);

      // Z depth: slight stagger for visual interest
      const z = Math.sin(row * 1.2) * 2;

      return { ...tech, position: [x, y, z] };
    });
  }, []);

  return (
    <>
      {/* Clean, professional lighting — no environment map */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} />
      <directionalLight position={[-10, 5, 5]} intensity={0.8} />
      <pointLight position={[0, 10, 0]} intensity={0.5} color="#ffffff" />

      {spheres.map((sphere) => (
        <SkillSphere
          key={sphere.name}
          icon={sphere.icon}
          position={sphere.position}
        />
      ))}
    </>
  );
};

const TechBallsCanvas = () => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      camera={{ position: [0, 0, 30], fov: 40 }}
      gl={{ preserveDrawingBuffer: true, antialias: true, alpha: true }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {/* Transparent background so hero text shows through */}
      <Suspense fallback={<CanvasLoader />}>
        <TechBalls />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default TechBallsCanvas;
