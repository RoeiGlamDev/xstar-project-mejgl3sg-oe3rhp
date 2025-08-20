'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface TeamMember {
  name: string
  position: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Turner',
    position: 'Creative Director',
    image: '/images/sophia.jpg',
  },
  {
    name: 'Liam Johnson',
    position: 'Chief Stylist',
    image: '/images/liam.jpg',
  },
  {
    name: 'Olivia Smith',
    position: 'Brand Strategist',
    image: '/images/olivia.jpg',
  },
]
const AboutSection: React.FC = () => {
  return (<>
<section className="bg-white py-16 flex flex-col items-center">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}

        <h2 className="text-4xl font-bold text-pink-500 mb-4">Our Story</h2>
        <p className="text-lg text-gray-700">
          FashionTV was born from a passion for luxury and elegance in the world of cosmetics. 
          Our journey began with a vision to redefine beauty standards by celebrating individuality 
          through sophisticated, high-end beauty products.
        </p>
      </motion.div>
      
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}

        <h2 className="text-4xl font-bold text-pink-500 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700">
          At FashionTV, our mission is to empower individuals to express their unique style 
          and confidence through our luxurious and innovative cosmetics. We believe in creating 
          products that not only enhance beauty but also embody elegance and sophistication.
        </p>
      </motion.div>

      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}

        <h2 className="text-4xl font-bold text-pink-500 mb-4">Our Team</h2>
        <p className="text-lg text-gray-700 mb-6">
          Our dedicated team of experts brings a wealth of experience and a shared commitment 
          to luxury and quality. Meet the visionaries behind FashionTV:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="group p-4 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
              <img src={member.image} alt={member.name} className="w-full h-60 object-cover rounded-t-lg" />
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold text-pink-500">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}

        <h2 className="text-4xl font-bold text-pink-500 mb-4">Our Values</h2>
        <p className="text-lg text-gray-700 mb-4">
          At FashionTV, we are committed to quality, innovation, and sustainability, ensuring 
          that our products not only meet but exceed the expectations of our discerning clients.
        </p>
        <p className="text-lg text-gray-700">
          Join us as we continue to set trends and inspire beauty enthusiasts around the world with fashion-forward thinking.
        </p>
      </motion.div>
    </section>
</>)
}
export default AboutSection
);