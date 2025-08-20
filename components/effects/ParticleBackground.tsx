'use client'
import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { motion } from 'framer-motion'
const ParticleBackground: React.FC = () => {
    const mountRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({ alpha: true })
        renderer.setSize(window.innerWidth, window.innerHeight)
        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement)
        }

        const particleCount = 500
        const particles = new THREE.BufferGeometry()
        const positions = new Float32Array(particleCount * 3)
        for (let i = 0; i < particleCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 10
        }
        particles.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        const material = new THREE.PointsMaterial({ color: 'pink', size: 0.1 })
        const particleSystem = new THREE.Points(particles, material)
        scene.add(particleSystem)
        camera.position.z = 5
        const animate = () => {
            requestAnimationFrame(animate)
            particleSystem.rotation.x += 0.001
            particleSystem.rotation.y += 0.001
            renderer.render(scene, camera)
        }
        animate()
        return () => {
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement)
            }
        }
    }, [])
    return (<>
<div ref={mountRef} className="absolute inset-0 z-0">
            <motion.div
                className="flex items-center justify-center h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}

                <h1 className="text-5xl font-bold text-white shadow-lg hover:shadow-2xl transition-all duration-300">
                    Welcome to FashionTV
                </h1>
            </motion.div>
        </div>
</>)
}
export default ParticleBackground
);