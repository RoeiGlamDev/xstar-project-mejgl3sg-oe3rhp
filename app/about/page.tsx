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
    name: 'Sophia Loren',
    position: 'Creative Director',
    image: '/images/team/sophia_loren.jpg',
  },
  {
    name: 'Liam Neeson',
    position: 'Head of Makeup',
    image: '/images/team/liam_neeson.jpg',
  },
  {
    name: 'Isabella Rossellini',
    position: 'Lead Cosmetic Chemist',
    image: '/images/team/isabella_rossellini.jpg',
  },
]
const About: React.FC = () => {
  return (<>
<div className="bg-white text-pink-500">
      <div className="max-w-7xl mx-auto py-16 px-8">
        <motion.h1
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}

          About FashionTV
        </motion.div>
        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}

          At FashionTV, we believe in the elegance of luxury cosmetics that 
          enhance natural beauty. Our journey began with a passion for fashion 
          and a commitment to creating exquisite products that embody sophistication 
          and style. 
        </motion.div>
        
        <motion.h2
          className="text-3xl font-semibold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}

          Our History
        </motion.div>
        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}

          Founded in 2020, FashionTV has rapidly established itself as a leader 
          in the luxury cosmetics industry. Our mission is to provide high-end 
          beauty products that empower individuals to express their unique style.
        </motion.div>

        <motion.h2
          className="text-3xl font-semibold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}

          Our Values
        </motion.div>
        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}

          We value creativity, sustainability, and inclusivity. FashionTV is 
          committed to using ethically sourced ingredients, and our products 
          are designed to cater to all skin types, allowing everyone to indulge 
          in luxury beauty.
        </motion.div>

        <motion.h2
          className="text-3xl font-semibold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}

          Meet the Team
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-pink-100 p-6 rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}

              <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-md">{member.position}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
</>)
}
export default About
);