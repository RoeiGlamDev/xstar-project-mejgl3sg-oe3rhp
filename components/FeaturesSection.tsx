'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface Feature {
  id: number
  title: string
  description: string
  icon: JSX.Element
}

const features: Feature[] = [
  {
    id: 1,
    title: "Premium Quality",
    description: "Discover cosmetics crafted with the finest ingredients, ensuring luxurious results.",
    icon: <i className="fas fa-gem text-pink-500"></i>,
  },
  {
    id: 2,
    title: "Luxury Experience",
    description: "Indulge in an immersive shopping experience that brings elegance to your beauty routine.",
    icon: <i className="fas fa-luxury-smoke text-pink-500"></i>,
  },
  {
    id: 3,
    title: "Expert Guidance",
    description: "Receive personalized recommendations from our beauty experts tailored to your unique style.",
    icon: <i className="fas fa-user-tie text-pink-500"></i>,
  },
  {
    id: 4,
    title: "Exclusive Collections",
    description: "Shop limited edition items and exquisite collections only available at FashionTV.",
    icon: <i className="fas fa-shopping-bag text-pink-500"></i>,
  },
]
const FeaturesSection: React.FC = () => {
  return (<>
<section className="bg-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-bold text-pink-500 mb-8">FashionTV Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="bg-pink-50 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}

              <div className="text-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-pink-500">{feature.title}</h3>
              <p className="text-gray-700 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
</>)
}
export default FeaturesSection
);