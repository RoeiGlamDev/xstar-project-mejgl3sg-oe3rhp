'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface InputProps {
  label: string
  type: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, value, onChange, error }) => {
  const [isFocused, setIsFocused] = useState(false)
  return (<>
<div className="flex flex-col mb-4">
      <label className={${isFocused ? "text-pink-600" : "text-gray-700"} text-sm font-semibold mb-1}>
        {label}
      </label>
      <motion.input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={border ${error ? 'border-red-600' : 'border-gray-300'} rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300 ease-in-out}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      {error && <span className="text-red-600 text-xs mt-1">{error}</span>}
    </div>
</>)
}
export default Input
);