'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface CardProps {
  title: string
  description: string
  imageUrl: string
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (<>
<motion.div
      className="relative rounded-lg shadow-lg overflow-hidden bg-white bg-opacity-20 backdrop-blur-lg hover:scale-105 transition-transform duration-300 ease-in-out p-4"
      whileHover={{ scale: 1.05 }}
      aria-labelledby={${title}-title}

      <img
        src={imageUrl}
        alt={${title} image}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2
        id={${title}-title}
        className="text-pink-500 text-2xl font-bold mb-2"

        {title}
      </h2>
      <p className="text-white text-lg">{description}</p>
      <button className="mt-4 bg-pink-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-300 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-300">
        Shop Now
      </button>
    </motion.div>
</>)
}
export default Card
);