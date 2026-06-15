import { useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';

const AbstractShape = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    // Tự động xoay cơ bản
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;

    // Mouse Parallax effect
    const targetX = (state.pointer.x * Math.PI) / 4;
    const targetY = (state.pointer.y * Math.PI) / 4;

    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetX, 0.05);
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -targetY, 0.05);
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, state.pointer.x * 0.5, 0.05);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, state.pointer.y * 0.5, 0.05);
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.5, 0.4, 256, 64]} />
        <meshPhysicalMaterial 
          color="#ffffff"
          emissive="#0ff0fc"
          emissiveIntensity={0.2}
          roughness={0.1}
          metalness={0.8}
          transmission={0.9}
          thickness={0.5}
          ior={1.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </Float>
  );
};

const Abstract3D = () => {
  return (
    <div className="w-full h-[500px] md:h-[600px] relative">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#f26f21" />
        <pointLight position={[10, -10, 10]} intensity={2} color="#00ffff" />
        
        <AbstractShape />
        
        <Environment preset="city" />
        <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={10} blur={2} far={4} />
      </Canvas>
    </div>
  );
};

export default Abstract3D;
