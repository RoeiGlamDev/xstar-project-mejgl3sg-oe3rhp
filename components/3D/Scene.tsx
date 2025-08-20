'use client'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { motion } from 'framer-motion'
interface SceneProps {
    className?: string
}

const Model = () => {
    const { scene } = useGLTF('/models/cosmetics.glb')
    return <primitive object={scene} />
}
const Scene: React.FC<SceneProps> = ({ className }) => {
    return (<>
<div className={w-full h-screen ${className}}>
            <motion.h1
                className="text-pink-500 text-6xl font-serif text-center mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}

                Welcome to FashionTV
            </motion.div>
            <motion.p
                className="text-white text-xl text-center mt-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}

                Discover the luxury of high-end cosmetics tailored for the fashion elite.
            </motion.div>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <OrbitControls />
                <Model />
            </Canvas>
            <button
                className="mt-10 px-6 py-3 bg-pink-500 hover:bg-pink-400 transition-colors duration-300 rounded-full text-white font-bold"

                Shop Our Collection
            </button>
        </div>
</>)
}
export default Scene
);