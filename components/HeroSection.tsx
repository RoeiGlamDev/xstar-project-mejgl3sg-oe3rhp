'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface HeroSectionProps {
    // You can add additional props if needed in the future
}

const HeroSection: React.FC<HeroSectionProps> = () => {
    return (<>
<section className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-pink-500 to-white">
            <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}

                <h1 className="text-6xl font-bold text-pink-600 mb-4">
                    FashionTV
                </h1>
                <p className="text-xl font-light text-gray-700 mb-8">
                    Experience luxury beauty with our exclusive range of high-end cosmetics, crafted for the discerning fashion enthusiast.
                </p>
                <div className="flex space-x-4">
                    <motion.button 
                        className="px-6 py-3 bg-pink-600 text-white rounded-lg shadow-lg hover:bg-pink-500 transition duration-300" 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }}

                        Shop Now
                    </motion.div>
                    <motion.button 
                        className="px-6 py-3 border-2 border-pink-600 text-pink-600 rounded-lg bg-white shadow-lg hover:bg-pink-100 transition duration-300" 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }}

                        Learn More
                    </motion.div>
                </div>
                <div className="mt-12">
                    <p className="text-sm text-gray-500">
                        Trusted by top fashion influencers and available worldwide.
                    </p>
                </div>
            </motion.div>
        </section>
</>)
}

export default HeroSection
);