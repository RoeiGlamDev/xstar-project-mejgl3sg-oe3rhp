'use client'
import React, { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
interface FadeInProps {
  children: React.ReactNode
  duration?: number
}

const FadeIn: React.FC<FadeInProps> = ({ children, duration = 0.5 }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  return (<>
<motion.div
      ref={inView ? ref : inViewRef}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: duration }}
      className="text-center my-8"

      {children}
    </motion.div>
</>)
}
export default FadeIn
);