import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Counter = ({ value, decimals = 0, duration = 2.5 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        const easeProgress = 1 - Math.pow(1 - progress, 4); // easeOutQuart
        setCount(easeProgress * value);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count.toFixed(decimals)}</span>;
};

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="about" className="py-32 w-full relative" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 space-y-12"
          >
            <div>
              <motion.h2 variants={itemVariants} className="text-sm font-medium tracking-widest text-secondary uppercase mb-3">01. Background</motion.h2>
              <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">Architecting Digital Experiences.</motion.h3>
              
              <div className="space-y-6 text-secondary text-lg font-light leading-relaxed">
                <motion.div variants={itemVariants} className="relative pl-6 border-l border-accent/30">
                  <h4 className="text-white font-medium text-xl mb-2">Who I Am</h4>
                  <p>
                    I'm an engineer who bridges the gap between complex logic and elegant interfaces. 
                    Based in India, my work revolves around building systems that are both highly 
                    performant and intuitively designed.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="relative pl-6 border-l border-white/10 hover:border-accent/30 transition-colors duration-300">
                  <h4 className="text-white font-medium text-xl mb-2">What I Do</h4>
                  <p>
                    I specialize in <span className="text-white">scalable backends</span> and <span className="text-white">fluid frontends</span>. 
                    I pay attention to performance, structure, and the small details that improve user experience.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="relative pl-6 border-l border-white/10 hover:border-accent/30 transition-colors duration-300">
                  <h4 className="text-white font-medium text-xl mb-2">Current Focus</h4>
                  <p>
                    Right now, I’m focused on strengthening my fundamentals in system design, distributed systems, and real-time applications while building projects that solve real-world problems.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Tiles & Timeline */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              style={{ y: y1 }}
              className="w-full max-w-sm mx-auto lg:ml-auto lg:mr-0 mt-12 lg:mt-24"
            >
              {/* Unified Academic Stats Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="relative rounded-[2.5rem] p-px bg-gradient-to-b from-white/10 to-transparent group h-full"
              >
                <div className="absolute inset-0 bg-accent/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem] -z-10"></div>
                <div className="bg-surface/50 backdrop-blur-xl rounded-[2.5rem] p-10 sm:p-12 h-full flex flex-col justify-center relative overflow-hidden shadow-2xl shadow-black/50">
                  {/* Decorative Background Icon */}
                  <div className="absolute -top-6 -right-6 p-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-700 transform rotate-12 group-hover:rotate-0">
                    <GraduationCap size={180} />
                  </div>
                  
                  <div className="relative z-10 flex flex-col gap-12">
                    {/* CGPA Section */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 rounded-full bg-white/5 border border-white/10 text-accent">
                          <Award size={18} />
                        </div>
                        <h5 className="text-secondary text-xs font-semibold tracking-widest uppercase">Academic Standing</h5>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-6xl sm:text-7xl font-bold text-white tracking-tighter"><Counter value={8.69} decimals={2} /></span>
                        <span className="text-lg text-secondary font-light">CGPA</span>
                      </div>
                    </div>
                    
                    <div className="w-full h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent"></div>
                    
                    {/* Graduation Section */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 rounded-full bg-white/5 border border-white/10 text-accent">
                          <GraduationCap size={18} />
                        </div>
                        <h5 className="text-secondary text-xs font-semibold tracking-widest uppercase">Expected Graduation</h5>
                      </div>
                      <div className="flex items-baseline gap-3">
                        <span className="text-xl text-secondary font-light uppercase tracking-widest">Class of</span>
                        <span className="text-5xl sm:text-6xl font-bold text-white tracking-tighter"><Counter value={2027} decimals={0} /></span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Background decorative elements */}
            <motion.div 
              style={{ y: y2 }}
              className="absolute -z-10 -right-20 -top-20 w-64 h-64 bg-accent/5 rounded-full blur-[100px]"
            ></motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
