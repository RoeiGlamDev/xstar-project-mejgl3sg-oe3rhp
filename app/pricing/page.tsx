'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
interface PricingPlan {
  name: string
  description: string
  price: string
  features: string[]
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Essence Plan',
    description: 'The essentials in luxury cosmetics.',
    price: '$49/month',
    features: [
      '6 Exclusive Products',
      'Personalized Consultation',
      'Access to FashionTV Events',
    ],
  },
  {
    name: 'Elegance Plan',
    description: 'Elevate your beauty routine with elegance.',
    price: '$99/month',
    features: [
      '12 Exclusive Products',
      'One-on-One Style Consultation',
      'VIP Access to Fashion Shows',
      'Customized Beauty Regimen',
    ],
  },
  {
    name: 'Opulence Plan',
    description: 'Experience the epitome of luxury.',
    price: '$149/month',
    features: [
      '16 Exclusive Products',
      'Luxury Brand Collaboration Products',
      'Concierge Beauty Service',
      'Personal Stylist Access',
    ],
  },
]
const FAQ = [
  {
    question: 'What makes FashionTV different from other brands?',
    answer: 'FashionTV curates high-end cosmetics that embody luxury, and our personalized services ensure you get the best experience tailored to your unique style.',
  },
  {
    question: 'Can I change my plan later?',
    answer: 'Absolutely! You can upgrade or downgrade your plan at any time to fit your evolving beauty needs.',
  },
  {
    question: 'Are the products cruelty-free?',
    answer: 'Yes! At FashionTV, we are committed to cruelty-free and sustainable practices in all our product offerings.',
  },
]
const PricingPage: React.FC = () => {
  const [activePlan, setActivePlan] = useState(0)
  return (<>
<div className="bg-white p-10">
      <motion.h1 
        className="text-4xl text-pink-500 font-bold text-center mb-8"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}

        FashionTV Pricing Plans
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}

        {pricingPlans.map((plan, index) => (
          <div 
            key={plan.name} 
            className={border-2 rounded-lg overflow-hidden p-5 transition duration-300 ${activePlan === index ? 'border-pink-500' : 'border-gray-300'} hover:border-pink-500 cursor-pointer}
            onClick={() => setActivePlan(index)}

            <h2 className="text-2xl text-pink-500 font-semibold mb-2">{plan.name}</h2>
            <p className="text-gray-600 mb-4">{plan.description}</p>
            <p className="text-3xl text-pink-500 font-bold mb-4">{plan.price}</p>
            <h3 className="font-medium text-gray-700">Features:</h3>
            <ul className="list-disc list-inside mb-4">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="text-gray-600">{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>

      <motion.h2 
        className="text-3xl text-pink-500 font-bold text-center my-8"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}

        Frequently Asked Questions
      </motion.div>

      <div className="space-y-4">
        {FAQ.map((item, index) => (
          <div key={index} className="p-4 border rounded-md hover:bg-pink-100 transition duration-200">
            <h3 className="font-bold text-pink-600">{item.question}</h3>
            <p className="text-gray-600">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
</>)
}
export default PricingPage
);