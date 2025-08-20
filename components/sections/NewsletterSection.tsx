'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface NewsletterSectionProps {
    onSubmit: (email: string) => void
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ onSubmit }) => {
    const [email, setEmail] = useState('')
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (email) {
            onSubmit(email)
            setEmail('')
        }
    }
    return (<>
<div className="bg-white py-12">
            <motion.div
                className="max-w-2xl mx-auto text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}

                <h2 className="text-3xl font-bold text-pink-600 mb-4">
                    Join the FashionTV Family
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    Elevate your beauty routine with exclusive insights and the latest trends. Subscribe now to receive luxury makeup tips, special promotions, and event invitations!
                </p>
                <form onSubmit={handleSubmit} className="flex justify-center">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        className="border border-pink-400 rounded-l-md p-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                        aria-label="Email address"
                        required
                    />
                    <motion.button
                        type="submit"
                        className="bg-pink-600 text-white rounded-r-md p-3 hover:bg-pink-700 transition duration-300 ease-in-out focus:outline-none"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}

                        Subscribe
                    </motion.div>
                </form>
                <p className="text-sm text-gray-500 mt-4">
                    By subscribing, you agree to receive marketing communications from FashionTV. You can unsubscribe at any time.
                </p>
            </motion.div>
        </div>
</>)
}
export default NewsletterSection
);