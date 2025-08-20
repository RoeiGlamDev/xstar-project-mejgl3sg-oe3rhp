'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface ButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
  children: React.ReactNode
}

const buttonVariants = {
  primary: 'bg-pink-500 text-white hover:bg-pink-600',
  secondary: 'bg-white text-pink-500 border border-pink-500 hover:bg-pink-100',
}
const sizeVariants = {
  small: 'px-4 py-2 text-sm',
  medium: 'px-6 py-3 text-lg',
  large: 'px-8 py-4 text-xl',
}
const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'medium', onClick, children }) => {
  return (<>
<motion.button
      className={font-bold rounded-md focus:outline-none transition-all duration-200 ease-in ${buttonVariants[variant]} ${sizeVariants[size]}}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      aria-label={FashionTV ${variant} button}

      {children}
    </motion.div>
</>)
}
export default Button
);