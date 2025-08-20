'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface FooterProps {
  companyName: string
  year: number
}

const Footer: React.FC<FooterProps> = ({ companyName, year }) => {
  return (<>
<footer className="bg-white text-pink-600 py-10 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="mb-6 md:mb-0">
          <motion.h2
            className="text-3xl font-bold mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}

            {companyName} 
          </motion.div>
          <p className="text-lg">Elevate your beauty with our exclusive collection of luxury cosmetics.</p>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-10">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-pink-500 transition duration-300">Home</a>
              </li>
              <li>
                <a href="/shop" className="hover:text-pink-500 transition duration-300">Shop</a>
              </li>
              <li>
                <a href="/about" className="hover:text-pink-500 transition duration-300">About Us</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-pink-500 transition duration-300">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="space-x-4 mt-2">
              <a href="#" className="text-pink-600 hover:underline transition duration-300">Instagram</a>
              <a href="#" className="text-pink-600 hover:underline transition duration-300">Facebook</a>
              <a href="#" className="text-pink-600 hover:underline transition duration-300">Twitter</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-pink-200 pt-6 text-center">
        <p className="text-sm">&copy; {year} {companyName}. All rights reserved.</p>
        <p className="text-sm">Crafted with love and passion for elegance in every detail.</p>
      </div>
    </footer>
</>)
}
export default Footer
);