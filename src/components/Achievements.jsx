import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code2, Award, Terminal } from 'lucide-react';

const achievements = [
  {
    title: "250+ DSA Problems Solved",
    description: "Consistently sharpening algorithmic problem-solving skills and data structure mastery across LeetCode, Codeforces, and GeeksForGeeks.",
    icon: <Code2 className="text-accent mb-6" size={36} />
  },
  {
    title: "Hackathon Podiums",
    description: "Secured 2nd position in Cipher Quest Hackathon and 3rd position in Ignithon Hackathon organized by KIIT University.",
    icon: <Trophy className="text-white mb-6 group-hover:text-accent transition-colors" size={36} />
  },
  {
    title: "Deloitte Australia",
    description: "Completed the Data Analytics Job Simulation, gaining practical insights into real-world data analysis (May 2025).",
    icon: <Terminal className="text-white mb-6 group-hover:text-accent transition-colors" size={36} />
  },
  {
    title: "Google AI Certification",
    description: "Earned the 'Introduction to Generative AI' certification, building foundational knowledge in modern AI (May 2024).",
    icon: <Award className="text-white mb-6 group-hover:text-accent transition-colors" size={36} />
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-32 w-full relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-sm font-medium tracking-widest text-secondary uppercase mb-3">Milestones</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Achievements & Certifications.</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
              className="p-8 rounded-3xl bg-surface/30 border border-white/5 backdrop-blur-sm group relative overflow-hidden flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex-grow">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-block"
                >
                  {item.icon}
                </motion.div>
                <h4 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-accent transition-colors">{item.title}</h4>
                <p className="text-secondary text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
