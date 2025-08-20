'use client'
import { motion } from 'framer-motion'
interface SlideUpProps {
  children: React.ReactNode
}

const SlideUp: React.FC<SlideUpProps> = ({ children }) => {
  const slideUpVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  }
  return (<>
<motion.div
      variants={slideUpVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="bg-white p-6 rounded-lg shadow-lg"

      {children}
    </motion.div>
</>)
}
export default SlideUp
);