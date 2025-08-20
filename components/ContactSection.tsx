'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface ContactFormProps {
  name: string
  email: string
  message: string
  reason: string
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormProps>({
    name: '',
    email: '',
    message: '',
    reason: 'General Inquiry',
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const validateForm = (): boolean => {
    let formErrors: { [key: string]: string } = {}
    if (!formData.name) formErrors.name = 'Name is required'
    if (!formData.email) {
      formErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid'
    }
    if (!formData.message) formErrors.message = 'Message is required'
    setErrors(formErrors)
    return Object.keys(formErrors).length === 0
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateForm()) {
      // Handle successful form submission (send data to API, etc.)
      console.log('Submitted:', formData)
    }
  }
  return (<>
<section className="bg-white text-pink-600 py-12 px-6">
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}

        Contact FashionTV
      </motion.div>
      <motion.form
        className="max-w-lg mx-auto bg-pink-100 rounded-lg shadow-lg p-6"
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}

        <label className="block mb-2 text-lg font-semibold">
          Name
          <input
            type="text"
            name="name"
            className="mt-1 p-2 border-b-2 border-pink-600 focus:outline-none focus:border-pink-800 w-full"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="text-red-500">{errors.name}</span>}
        </label>
        <label className="block mb-2 text-lg font-semibold">
          Email
          <input
            type="email"
            name="email"
            className="mt-1 p-2 border-b-2 border-pink-600 focus:outline-none focus:border-pink-800 w-full"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
        </label>
        <label className="block mb-2 text-lg font-semibold">
          Reason for Contact
          <select
            name="reason"
            className="mt-1 p-2 border-b-2 border-pink-600 focus:outline-none focus:border-pink-800 w-full"
            value={formData.reason}
            onChange={handleChange}

            <option value="General Inquiry">General Inquiry</option>
            <option value="Business Collaboration">Business Collaboration</option>
            <option value="Partnership Opportunities">Partnership Opportunities</option>
            <option value="Product Feedback">Product Feedback</option>
          </select>
        </label>
        <label className="block mb-2 text-lg font-semibold">
          Message
          <textarea
            name="message"
            className="mt-1 p-2 border-b-2 border-pink-600 focus:outline-none focus:border-pink-800 w-full"
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span className="text-red-500">{errors.message}</span>}
        </label>
        <button
          type="submit"
          className="mt-6 bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-800 transition duration-300 ease-in-out"

          Send Message
        </button>
      </motion.div>
      <div className="text-center mt-8">
        <h3 className="text-2xl font-bold">FashionTV</h3>
        <p className="mt-2">Location: 123 Fashion Ave, Style City, SC 12345</p>
        <p className="mt-1">Business Hours: Mon - Fri 9 AM - 6 PM</p>
        <p className="mt-1">Email: contact@fashontv.com</p>
      </div>
    </section>
</>)
}
export default ContactSection
);