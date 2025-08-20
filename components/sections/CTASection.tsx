'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface CTASectionProps {
  title: string
  subtitle: string
  buttonText: string
  buttonLink: string
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Experience Luxury with FashionTV",
  subtitle = "Discover our exclusive cosmetics collection tailored for the modern connoisseur.",
  buttonText = "Shop Now",
  buttonLink = "/shop",
}) => {
  return (<>
<motion.section
      className="flex flex-col items-center justify-center py-16 bg-white text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}

      <motion.h2 
        className="text-4xl font-bold text-pink-500 mb-2"
        whileHover={{ scale: 1.05 }}

        {title}
      </motion.div>
      <motion.p 
        className="text-lg text-gray-700 mb-6"
        whileHover={{ scale: 1.02 }}

        {subtitle}
      </motion.div>
      <motion.a
        href={buttonLink}
        className="bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out 
                   hover:bg-pink-600 hover:shadow-lg"
        whileHover={{ scale: 1.05 }}

        {buttonText}
      </motion.div>
    </motion.section>
</>)
}
export default CTASection
);