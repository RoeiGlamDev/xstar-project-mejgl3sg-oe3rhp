import { useEffect, useRef } from 'react'
import * as THREE from 'three'
/
 * @module use3D
 * @description Custom hook for handling 3D interactions for FashionTV interactive elements. 
 * This hook leverages Three.js for rendering three-dimensional objects in a luxury cosmetics context.
 */

interface FashionTV3DProps {
  modelPath: string; // Path to the 3D model asset
  onModelLoaded?: () => void; // Callback when the model is loaded
  backgroundColor?: string; // Background color for the scene
}

/
 * Initializes a 3D scene using Three.js.
 * @param {FashionTV3DProps} props Properties for the 3D model and interaction.
 */
const use3D = ({ modelPath, onModelLoaded, backgroundColor = '#ffffff' }: FashionTV3DProps) => {
  const mountRef = useRef<HTMLDivElement|null>(null)
  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    mountRef.current?.appendChild(renderer.domElement)
    scene.background = new THREE.Color(backgroundColor)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)
    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(10, 10, 10)
    scene.add(pointLight)
    const loader = new THREE.GLTFLoader()
    // Load 3D Model
    loader.load(modelPath, (gltf) => {
      scene.add(gltf.scene)
      if (onModelLoaded) onModelLoaded()
    })
    camera.position.z = 5
    const animate = () => {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }
    animate()
    // Clean up on unmount
    return () => {
      mountRef.current?.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [modelPath, onModelLoaded, backgroundColor])
  return { mountRef }
}
export default use3D;