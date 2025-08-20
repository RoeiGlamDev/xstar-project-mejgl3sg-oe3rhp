'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface ContactFormData {
  name: string
  email: string
  message: string
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  })
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission logic here, e.g., send data to the server
    setFormSubmitted(true)
  }
  return (<>
<div className="flex flex-col items-center justify-center bg-white min-h-screen p-5">
      <motion.h1 
        className="text-pink-600 text-4xl font-serif font-bold mb-6" 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}

        Contact FashionTV
      </motion.div>

      <motion.form 
        className="bg-pink-100 rounded-lg p-8 shadow-lg w-full max-w-lg" 
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="name">Your Name</label>
          <input 
            className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:ring-pink-300" 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">Your Email</label>
          <input 
            className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:ring-pink-300" 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="message">Your Message</label>
          <textarea 
            className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:ring-pink-300" 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            rows={4} 
            required 
          />
        </div>

        <motion.button 
          type="submit" 
          className="bg-pink-600 text-white font-bold py-2 px-4 rounded hover:bg-pink-500 transition duration-200" 
          whileHover={{ scale: 1.05 }}

          Send Message
        </motion.div>
      </motion.div>

      {formSubmitted && (
        <div className="mt-5 text-green-600">
          Thank you for contacting FashionTV! We will get back to you soon.
        </div>
      )}

      <div className="mt-10 text-center">
        <h2 className="text-pink-600 text-2xl font-serif font-bold mb-4">Our Location</h2>
        <p className="text-gray-700">Visit us at:</p>
        <p className="text-gray-700">Elegant FashionTV Boutique</p>
        <p className="text-gray-700">123 Glamour Ave, Lux City, CA 90210</p>
      </div>
      
      <div className="mt-5 text-center">
        <h2 className="text-pink-600 text-2xl font-serif font-bold mb-4">Business Hours</h2>
        <p className="text-gray-700">Monday - Friday: 10 AM - 7 PM</p>
        <p className="text-gray-700">Saturday: 11 AM - 6 PM</p>
        <p className="text-gray-700">Sunday: Closed</p>
      </div>
    </div>
</>)
}
export default ContactPage
);