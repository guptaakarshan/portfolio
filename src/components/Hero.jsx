import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Magnetic from './Magnetic';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityText = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} id="hero" className="min-h-[100vh] w-full flex items-center relative overflow-hidden">
      <div className="w-full grid md:grid-cols-2 gap-12 lg:gap-8 items-center z-10 mt-24 lg:mt-16 pt-12 md:pt-0">
        
        {/* Left Side: Text */}
        <motion.div 
          style={{ y: yText, opacity: opacityText }}
          className="flex flex-col justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-secondary font-medium tracking-widest uppercase text-xs sm:text-sm mb-6 ml-1">
              Software Engineer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] xl:text-[9rem] font-bold tracking-tighter text-white mb-6 leading-[0.9] -ml-1 sm:-ml-2">
              Akarshan <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20">Gupta</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-lg text-base sm:text-lg text-secondary mb-12 leading-relaxed font-light"
          >
            <p>
              I build precise, high-performance web applications and scalable backends. 
              Currently focused on creating real-time collaborative digital experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-4"
          >
            <Magnetic>
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-white text-black font-medium rounded-full overflow-hidden transition-all flex items-center justify-center gap-2 text-sm hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Work
                </span>
              </a>
            </Magnetic>
            
            <Magnetic>
              <a
                href="#contact"
                className="flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 hover:border-white/40 transition-all text-sm active:scale-95"
              >
                Contact Me
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
           style={{ y: yText, opacity: opacityText }}
           initial={{ opacity: 0, y: -50, scale: 0.9 }}
           animate={{ opacity: 1, y: 0, scale: 1 }}
           transition={{ duration: 0.8, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
           className="relative hidden md:flex justify-end items-center lg:pr-8"
        >
           <div className="relative w-full max-w-[400px] xl:max-w-[450px] aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 bg-surface/30 group shadow-2xl shadow-black/50">
             {/* Gradient Overlay for Sleek Modern Look */}
             <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent mix-blend-overlay z-10 opacity-60 group-hover:opacity-0 transition-opacity duration-700"></div>
             
             {/* Image */}
             <img 
                src="/photo.jpeg" 
                alt="Akarshan Gupta" 
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
             />
             
             {/* Inner border glow */}
             <div className="absolute inset-0 border border-white/5 rounded-[2.5rem] z-20 pointer-events-none"></div>
           </div>
           
           {/* Decorative Background Glow */}
           <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 blur-[100px] rounded-full pointer-events-none"></div>
        </motion.div>

      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-secondary/50"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
