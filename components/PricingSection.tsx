'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface PricingTier {
  name: string
  price: string
  features: string[]
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Essence Collection',
    price: '$199/month',
    features: [
      'Exclusive access to FashionTV trends',
      'Monthly fashion consultation',
      'Premium newsletter subscription',
      '10% off on luxury products',
    ],
  },
  {
    name: 'Divine Collection',
    price: '$299/month',
    features: [
      'All Essence Collection features',
      'Personalized fashion guidance',
      'Virtual styling appointments',
      '15% off on exclusive launches',
    ],
  },
  {
    name: 'Ultimate Glam Collection',
    price: '$499/month',
    features: [
      'All Divine Collection features',
      'One-on-one consultation with top stylists',
      'Access to VIP events',
      '20% off on all FashionTV products',
    ],
  },
]
const PricingSection: React.FC = () => {
  return (<>
<section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-pink-500 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}

          Elevate Your Style with FashionTV
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-white border border-pink-500 rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}

              <h3 className="text-2xl font-semibold text-pink-500 mb-4">{tier.name}</h3>
              <span className="block text-4xl font-bold text-gray-800 mb-4">{tier.price}</span>
              <ul className="text-left mb-6">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-600 mb-2">
                    - {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-block bg-pink-500 text-white font-semibold py-2 px-4 rounded transition-colors duration-300 hover:bg-pink-600"

                Choose This Collection
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
</>)
}
export default PricingSection
);