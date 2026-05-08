import React from 'react';
import { motion } from 'framer-motion';

const experience = [
  {
    title: "Anchoring & Volunteer",
    company: "College Fest, KIIT",
    date: "Various",
    details: [
      "Anchored and volunteered at the College Fest, KIIT, managing event coordination and audience engagement."
    ]
  },
  {
    title: "Contributor",
    company: "Kalliope",
    date: "Various",
    details: [
      "Contributed to the Social Media, Content, and R&D teams for Kalliope, The Anchoring Society of KIIT."
    ]
  },
  {
    title: "General Volunteer",
    company: "National Service Scheme (NSS) - KIIT",
    date: "Various",
    details: [
      "Participated as a general volunteer in multiple NSS community service initiatives."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 w-full relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-sm font-medium tracking-widest text-secondary uppercase mb-3">Roles</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Experience.</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="flex flex-col p-8 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-white/[0.04] transition-colors"
            >
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest text-secondary mb-2 block">{exp.date}</span>
                <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                <h4 className="text-sm font-medium text-accent">{exp.company}</h4>
              </div>
              
              <ul className="space-y-4 mt-auto">
                {exp.details.map((detail, i) => (
                  <li key={i} className="text-secondary text-sm font-light leading-relaxed">
                    {detail}
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

export default Experience;
