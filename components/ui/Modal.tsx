'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null
  return (<>
<div className="fixed inset-0 flex items-center justify-center z-50">
      <motion.div
        className="absolute inset-0 bg-white opacity-50 backdrop-blur-md"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}

      <motion.div
        className="bg-pink-500 rounded-lg shadow-lg p-8 z-10 max-w-lg w-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.3 }}

        <h2 className="text-white text-2xl font-bold mb-4">{title}</h2>
        <div className="text-white">
          {children}
        </div>
        <button
          onClick={onClose}
          className="mt-6 bg-white text-pink-500 rounded-md py-2 px-4 hover:bg-pink-300 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-200"

          Close
        </button>
      </motion.div>
    </div>
</>)
}
export default Modal
);