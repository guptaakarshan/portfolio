import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast boot sequence (approx 1.5 seconds)
    const duration = 1500;
    const interval = 15;
    const step = 100 / (duration / interval);
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300); // Brief pause at 100% before sliding up
          return 100;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#050505]"
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="flex flex-col items-center w-64">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-8">
          AKARSHAN<span className="text-accent">.</span>
        </h1>
        <div className="w-full h-px bg-white/10 relative overflow-hidden mb-4">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-accent"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between w-full text-secondary font-mono text-xs tracking-widest uppercase">
          <span>Loading System</span>
          <span>{Math.floor(progress)}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
