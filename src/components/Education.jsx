import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    school: "Kalinga Institute of Industrial Technology",
    location: "Bhubaneswar, Odisha",
    degree: "B.Tech in Computer Science & Engineering",
    date: "2023 - 2027",
    score: "CGPA: 8.69"
  },
  {
    school: "Delhi Public School, Civil Lines",
    location: "Aligarh, Uttar Pradesh",
    degree: "Intermediate",
    date: "2021 - 2022",
    score: "90.4%"
  },
  {
    school: "Litera Valley Zee School",
    location: "Hosur, Tamil Nadu",
    degree: "High School",
    date: "2019 - 2020",
    score: "88.33%"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-32 w-full relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-sm font-medium tracking-widest text-secondary uppercase mb-3">Academic Journey</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Education.</h3>
        </motion.div>

        <div className="space-y-16">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3 gap-2">
                <h4 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">{edu.school}</h4>
                <span className="text-sm text-secondary font-medium tracking-wide">{edu.date}</span>
              </div>
              <div className="text-white/80 font-medium text-lg mb-5">{edu.degree}</div>
              <div className="flex items-center gap-4 text-sm text-secondary">
                <span>{edu.location}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                <span className="text-white bg-white/10 px-3 py-1 rounded-md font-medium tracking-wide">{edu.score}</span>
              </div>
              
              {index !== education.length - 1 && (
                <div className="absolute -bottom-8 left-0 w-full h-px bg-gradient-to-r from-white/10 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
