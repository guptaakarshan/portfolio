import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  const text = " SOFTWARE ENGINEER • FULL STACK DEVELOPER • PROBLEM SOLVER • ";
  return (
    <div className="w-full bg-surface/30 border-y border-white/5 py-6 overflow-hidden relative flex whitespace-nowrap">
      {/* Decorative gradient masks for fading edges */}
      <div className="absolute top-0 left-0 w-16 md:w-48 h-full bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-16 md:w-48 h-full bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
      
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25
        }}
      >
        <div className="flex text-4xl md:text-7xl font-black tracking-widest text-transparent uppercase" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Marquee;
