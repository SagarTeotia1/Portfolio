import React from 'react';
import { useScroll, motion } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, #8B6244, #C4956A)',
        scaleX: scrollYProgress,
        transformOrigin: '0%',
        zIndex: 9999,
      }}
    />
  );
}
