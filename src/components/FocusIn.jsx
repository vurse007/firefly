"use client";

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

export default function FocusIn({ 
  children, 
  className = '', 
  delay = 0,
  duration = 0.8,
  blurAmount = 10,
  margin = '0px'
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: margin });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ 
        opacity: 0, 
        filter: `blur(${blurAmount}px)`,
        willChange: 'filter, opacity'
      }}
      animate={isInView ? { 
        opacity: 1, 
        filter: 'blur(0px)'
      } : { 
        opacity: 0, 
        filter: `blur(${blurAmount}px)`
      }}
      transition={{ 
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      style={{
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden'
      }}
    >
      {children}
    </motion.div>
  );
}

