'use client'
import React, { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Motion, motion } from 'framer-motion'
const FloatingElements: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null)
  useEffect(() => {
    const animateMesh = () => {
      if (meshRef.current) {
        const time = performance.now() * 0.001
        meshRef.current.position.y = Math.sin(time) * 0.5
        meshRef.current.rotation.y += 0.01
      }
      requestAnimationFrame(animateMesh)
    }
    animateMesh()
  }, [])
  return (<>
<div className="w-full h-full flex items-center justify-center bg-white">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
        <motion.mesh 
          ref={meshRef} 
          position={[0, 0, 0]} 
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}

          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#FF69B4" />
        </motion.div>
        <OrbitControls />
      </Canvas>
      
      <div className="absolute bottom-0 left-0 ml-4 mb-4 text-right">
        <h1 className="text-4xl text-pink-600 font-extrabold">Welcome to FashionTV</h1>
        <p className="text-lg text-gray-700 mt-2">
          Indulge in the world of luxury cosmetics, where elegance meets beauty and style. Explore our exquisite collections tailored for the fashion connoisseur. 
        </p>
      </div>
    </div>
</>)
}
export default FloatingElements
);