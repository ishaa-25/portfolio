import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";

// Central Glowing Soma Nucleus + Webbed Organic Shell
const SomaCore = () => {
  const coreLightRef = useRef();
  const innerSphereRef = useRef();
  const cageRef1 = useRef();
  const cageRef2 = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (coreLightRef.current) {
      coreLightRef.current.intensity = 3.5 + Math.sin(t * 3.5) * 1.5;
    }
    if (innerSphereRef.current) {
      const scale = 1 + Math.sin(t * 3.5) * 0.08;
      innerSphereRef.current.scale.set(scale, scale, scale);
    }
    if (cageRef1.current) {
      cageRef1.current.rotation.y = t * 0.15;
      cageRef1.current.rotation.x = t * 0.08;
    }
    if (cageRef2.current) {
      cageRef2.current.rotation.y = -t * 0.12;
      cageRef2.current.rotation.z = t * 0.1;
    }
  });

  return (
    <group>
      {/* 1. Inner Radiant Energy Nucleus */}
      <mesh ref={innerSphereRef}>
        <sphereGeometry args={[0.42, 32, 32]} />
        <meshBasicMaterial color="#00ffff" />
      </mesh>

      {/* Internal High-Intensity Cyan Core Light */}
      <pointLight ref={coreLightRef} color="#00e5ff" intensity={4} distance={12} />

      {/* 2. Soft Plasma Energy Glow Atmosphere */}
      <mesh>
        <sphereGeometry args={[0.65, 32, 32]} />
        <meshStandardMaterial
          color="#0088ff"
          emissive="#00bfff"
          emissiveIntensity={1.8}
          transparent
          opacity={0.35}
          roughness={0.2}
        />
      </mesh>

      {/* 3. Glossy Dark Metallic Soma Body */}
      <mesh>
        <sphereGeometry args={[0.98, 48, 48]} />
        <meshStandardMaterial
          color="#081422"
          roughness={0.15}
          metalness={0.95}
          transparent
          opacity={0.88}
        />
      </mesh>

      {/* 4. Organic Webbed Voronoi / Geodesic Outer Lattice (Layer 1) */}
      <mesh ref={cageRef1}>
        <icosahedronGeometry args={[1.08, 2]} />
        <meshStandardMaterial
          wireframe
          color="#1e3a5f"
          emissive="#00bfff"
          emissiveIntensity={0.65}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* 5. Outer Cyan Synaptic Hex Web (Layer 2) */}
      <mesh ref={cageRef2}>
        <icosahedronGeometry args={[1.18, 1]} />
        <meshStandardMaterial
          wireframe
          color="#00d4ff"
          emissive="#0077b6"
          emissiveIntensity={0.9}
          metalness={0.85}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
};

// 3D Branching Axons and Dendrite Tendrils
const AxonTendrils = () => {
  const tendrilData = useMemo(() => {
    const mainTubes = [];
    const secondaryTubes = [];
    const count = 18; // 18 primary radial nerve trunks

    for (let i = 0; i < count; i++) {
      // Golden Spiral distribution on sphere surface
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const dir = new THREE.Vector3(
        Math.sin(phi) * Math.cos(theta),
        Math.sin(phi) * Math.sin(theta),
        Math.cos(phi)
      ).normalize();

      // Perpendicular tangent vector for organic curving
      let tangent = new THREE.Vector3(-dir.y, dir.x, 0).normalize();
      if (tangent.length() === 0) tangent = new THREE.Vector3(1, 0, 0);
      const curlSign = i % 2 === 0 ? 1 : -1;
      const curlAmount = 0.35 + (i % 4) * 0.1;

      // Primary Nerve Trunk points
      const p0 = dir.clone().multiplyScalar(0.96); // Anchors into soma surface
      const p1 = dir.clone().multiplyScalar(1.6).addScaledVector(tangent, curlSign * curlAmount);
      const p2 = dir.clone().multiplyScalar(2.5).addScaledVector(tangent, -curlSign * curlAmount * 0.6);
      const p3 = dir.clone().multiplyScalar(3.4 + (i % 3) * 0.4).addScaledVector(tangent, curlSign * curlAmount * 0.9);

      const mainCurve = new THREE.CatmullRomCurve3([p0, p1, p2, p3]);
      mainTubes.push(new THREE.TubeGeometry(mainCurve, 28, 0.046, 8, false));

      // Secondary branching sub-tendril (forking from mid-trunk)
      if (i % 2 === 0) {
        const subTangent = tangent.clone().cross(dir).normalize();
        const b0 = p1.clone();
        const b1 = p1.clone().add(dir.clone().multiplyScalar(0.8)).addScaledVector(subTangent, 0.45);
        const b2 = p1.clone().add(dir.clone().multiplyScalar(1.6)).addScaledVector(subTangent, 0.85);

        const subCurve = new THREE.CatmullRomCurve3([b0, b1, b2]);
        secondaryTubes.push(new THREE.TubeGeometry(subCurve, 18, 0.024, 6, false));
      }
    }

    return { mainTubes, secondaryTubes };
  }, []);

  return (
    <group>
      {/* Primary Main Trunks */}
      {tendrilData.mainTubes.map((geom, idx) => (
        <mesh key={`main-${idx}`} geometry={geom}>
          <meshStandardMaterial
            color="#122538"
            roughness={0.18}
            metalness={0.92}
            emissive="#003554"
            emissiveIntensity={0.4}
          />
        </mesh>
      ))}

      {/* Secondary Thin Branching Filaments */}
      {tendrilData.secondaryTubes.map((geom, idx) => (
        <mesh key={`sub-${idx}`} geometry={geom}>
          <meshStandardMaterial
            color="#16324a"
            roughness={0.2}
            metalness={0.88}
            emissive="#004e75"
            emissiveIntensity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
};

// Synaptic Cloud: Floating Nerve Graph Nodes & Connecting Synapse Lines
const SynapticNetwork = () => {
  const { nodePositions, lineGeometry } = useMemo(() => {
    const nodes = [];
    const count = 55;
    const maxDist = 1.35; // Maximum distance to connect two synaptic nodes

    // Scatter nodes in spherical shell around dendrite tips
    for (let i = 0; i < count; i++) {
      const radius = 2.0 + Math.random() * 1.8;
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      nodes.push(new THREE.Vector3(x, y, z));
    }

    // Connect close neighbors with cybernetic synapse lines
    const linePoints = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        if (nodes[i].distanceTo(nodes[j]) < maxDist) {
          linePoints.push(nodes[i].x, nodes[i].y, nodes[i].z);
          linePoints.push(nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }

    const lineGeom = new THREE.BufferGeometry();
    lineGeom.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePoints, 3)
    );

    return { nodePositions: nodes, lineGeometry: lineGeom };
  }, []);

  return (
    <group>
      {/* Synaptic Interconnect Lines */}
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#00bfff" transparent opacity={0.38} />
      </lineSegments>

      {/* Synaptic Nerve Terminals (Glowing Dots) */}
      {nodePositions.map((pos, idx) => (
        <mesh key={`node-${idx}`} position={pos}>
          <sphereGeometry args={[0.038, 10, 10]} />
          <meshBasicMaterial color="#00ffff" />
        </mesh>
      ))}
    </group>
  );
};

// Complete Animated Neural Network Model
const NeuralCoreModel = () => {
  const modelGroup = useRef();

  useFrame((state, delta) => {
    if (modelGroup.current) {
      // Continuous 3D revolving motion
      modelGroup.current.rotation.y += delta * 0.28;
      modelGroup.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.12;
      modelGroup.current.rotation.z = Math.cos(state.clock.getElapsedTime() * 0.3) * 0.08;
    }
  });

  return (
    <group ref={modelGroup} scale={1.05} position={[0, 0, 0]}>
      <SomaCore />
      <AxonTendrils />
      <SynapticNetwork />
    </group>
  );
};

// Canvas Wrapper with Dynamic Lighting and Orbit Controls
const NeuralCoreCanvas = () => {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 100,
        position: [0, 0, 8.5],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Cinematic Neural Lighting */}
        <ambientLight intensity={0.45} />
        <directionalLight position={[6, 5, 5]} intensity={1.2} color="#ffffff" />
        <directionalLight position={[-6, -4, -4]} intensity={1.6} color="#7928ca" />
        <pointLight position={[0, 0, 0]} intensity={3} color="#00ffff" distance={15} />

        {/* Orbit Controls (allows user to drag and rotate the neural core) */}
        <OrbitControls
          autoRotate={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 3}
        />

        <NeuralCoreModel />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default NeuralCoreCanvas;
