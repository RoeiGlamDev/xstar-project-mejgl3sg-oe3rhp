'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface HeaderProps {
  logo: string
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }
  return (<>
<header className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <motion.div
          className="text-pink-500 font-bold text-2xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}

          <img src={logo} alt="FashionTV Logo" className="h-10" />
        </motion.div>
        <nav className="hidden md:flex space-x-8">
          <motion.a
            href="#collections"
            className="text-gray-700 hover:text-pink-500 transition duration-200"
            whileHover={{ scale: 1.05 }}

            Collections
          </motion.div>
          <motion.a
            href="#about"
            className="text-gray-700 hover:text-pink-500 transition duration-200"
            whileHover={{ scale: 1.05 }}

            About Us
          </motion.div>
          <motion.a
            href="#blog"
            className="text-gray-700 hover:text-pink-500 transition duration-200"
            whileHover={{ scale: 1.05 }}

            Blog
          </motion.div>
          <motion.a
            href="#contact"
            className="text-gray-700 hover:text-pink-500 transition duration-200"
            whileHover={{ scale: 1.05 }}

            Contact
          </motion.div>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-pink-500 focus:outline-none"

            {isMobileMenuOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white p-4">
          <motion.div
            className="flex flex-col space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            <motion.a
              href="#collections"
              className="text-gray-700 hover:text-pink-500"
              whileHover={{ scale: 1.05 }}

              Collections
            </motion.div>
            <motion.a
              href="#about"
              className="text-gray-700 hover:text-pink-500"
              whileHover={{ scale: 1.05 }}

              About Us
            </motion.div>
            <motion.a
              href="#blog"
              className="text-gray-700 hover:text-pink-500"
              whileHover={{ scale: 1.05 }}

              Blog
            </motion.div>
            <motion.a
              href="#contact"
              className="text-gray-700 hover:text-pink-500"
              whileHover={{ scale: 1.05 }}

              Contact
            </motion.div>
          </motion.div>
        </div>
      )}
    </header>
</>)
}
export default Header
);