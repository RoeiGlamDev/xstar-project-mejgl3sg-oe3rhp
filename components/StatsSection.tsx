'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface Stats {
  label: string
  count: number
}

const statsData: Stats[] = [
  { label: 'Years of Excellence', count: 10 },
  { label: 'Luxury Collections Launched', count: 25 },
  { label: 'Global Fashion Events', count: 15 },
  { label: 'Satisfied Glamour Clients', count: 5000 },
]
const StatsSection: React.FC = () => {
  return (<>
<div className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-10">FashionTV Achievements</h2>
        <div className="flex flex-wrap justify-center">
          {statsData.map((stat) => (
            <motion.div
              key={stat.label}
              className="bg-pink-100 rounded-lg p-5 m-4 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}

              <h3 className="text-2xl font-semibold text-gray-800">{stat.label}</h3>
              <motion.p
                className="text-3xl text-pink-600 font-bold mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}

                <Counter count={stat.count} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
</>)
}
const Counter: React.FC<{ count: number }> = ({ count }) => {
  const [currentCount, setCurrentCount] = React.useState(0)
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (currentCount < count) {
        setCurrentCount((prev) => Math.min(prev + 1, count))
      }
    }, 50)
    return () => clearInterval(interval)
  }, [currentCount, count])
  return <span>{currentCount}+</span>
}
export default StatsSection
);