'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface Testimonial {
  name: string
  message: string
  rating: number
  photo: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Sophia Williams',
    message: 'FashionTV has transformed my beauty routine! The luxury cosmetics line feels incredible on my skin, and the results are stunning.',
    rating: 5,
    photo: '/images/testimonials/sophia.jpg',
  },
  {
    name: 'Liam Johnson',
    message: 'I adore FashionTV! Their high-end products always bring out the best in my skin. It's like the luxury I would expect on the runway.',
    rating: 5,
    photo: '/images/testimonials/liam.jpg',
  },
  {
    name: 'Emma Brown',
    message: 'The attention to detail in every product is exceptional. FashionTV truly understands luxury in the world of cosmetics!',
    rating: 4,
    photo: '/images/testimonials/emma.jpg',
  },
]
const TestimonialsSection: React.FC = () => {
  return (<>
<section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <motion.h2 
          className="text-4xl font-bold text-pink-600 mb-8"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}

          What Our Clients Say
        </motion.div>
        
        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-pink-100 p-6 m-4 rounded-lg shadow-lg transition-transform transform hover:scale-105" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5, delay: index * 0.2 }}

              <img src={testimonial.photo} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-pink-600">{testimonial.name}</h3>
              <p className="text-gray-700 italic mb-2">{testimonial.message}</p>
              <div className="flex justify-center my-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.091 1.125-6.558L.236 6.909l6.684-.974L10 0l2.058 5.935 6.684.974-4.727 4.624 1.125 6.558z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
</>)
}
export default TestimonialsSection
);