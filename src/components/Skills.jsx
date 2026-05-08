import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { category: "Languages", items: ["C","C++", "HTML", "CSS", "JavaScript","python"] },
  { category: "Frameworks", items: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Framer Motion","numpy","pandas","matplotlib","scikit-learn"] },
  { category: "Backend & DB", items: ["Socket.io", "MongoDB", "MySQL", "JWT", "Yjs","Supabase"] },
  { category: "Tools & Cloud", items: ["Git", "AWS", "VS Code", "Postman", "Jupyter Notebook", "Figma", "Github Copilot", "Claude"] },
  { category: "Core Subjects", items: ["Operating System", "Computer Networks", "Object Oriented Programming", "Database Management System", "Computer Organization & Architecture", "Machine Learning", "Natural Language Processing", "Artificial Intelligence"] }
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 w-full relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-sm font-medium tracking-widest text-secondary uppercase mb-3">Capabilities</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Technical Arsenal.</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillsData.map((skillGroup, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface/30 backdrop-blur-sm border border-white/5 p-8 rounded-3xl hover:bg-surface/60 transition-colors duration-500 group"
            >
              <h4 className="text-white font-bold text-xl mb-6 tracking-tight group-hover:text-accent transition-colors">{skillGroup.category}</h4>
              <ul className="flex flex-col gap-4">
                {skillGroup.items.map((item, i) => (
                  <li 
                    key={i} 
                    className="text-secondary text-base flex items-center gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white/60 transition-colors duration-500"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
