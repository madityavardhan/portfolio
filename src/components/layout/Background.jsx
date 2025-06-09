import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingSphere = () => {
  const meshRef = React.useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#00f3ff"
        metalness={0.8}
        roughness={0.2}
        emissive="#00f3ff"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg">
        <div className="absolute inset-0">
          <div className="absolute w-[500px] h-[500px] -top-48 -left-48 bg-neon-blue/5 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute w-[500px] h-[500px] -bottom-48 -right-48 bg-neon-purple/5 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neon-pink/5 rounded-full blur-3xl animate-pulse-slow" />
        </div>
      </div>

      {/* 3D Elements */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <FloatingSphere />
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none" />
    </div>
  );
};

export default Background; 