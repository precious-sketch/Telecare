import { motion,useInView } from 'framer-motion';
import React, { useRef } from 'react'

const AboutQuote = () => {
    
       const ref = useRef(null);
      const isInView = useInView(ref, { once: true });
  return (
    
       <div
          ref={ref}
          className="text-center max-w-2xl max-sm:text-base text-xl lg:text-2xl  w-full p-[3%] py-16 mx-auto leading-relaxed tracking-wide georgia"
        >
          {'“Telecare Services was founded with a vision to redefine Home-based and Community-Focused Care for individuals with intellectual and developmental disabilities.”'.split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.03, delay: index * 0.03 }}
              className="georgia"
            >
              {letter}
            </motion.span>
          ))}
        </div>
  )
}

export default AboutQuote;