import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "Collab-Docs",
    category: "Real-time Application",
    description: "A real-time collaborative document editor enabling multiple users to edit simultaneously with conflict-free synchronization using Yjs (CRDTs). Engineered scalable backend by merging Socket.IO and Yjs WebSocket server on a single Express server.",
    tech: ["MERN Stack", "Yjs", "Socket.IO", "WebSockets", "JWT"],
    github: "https://github.com/guptaakarshan/Collab_Docs",
    live: "https://collab-docs-six.vercel.app/",
    image: "/collab-docs.png",
  },
  {
    title: "SpendSense",
    category: "Fintech Dashboard",
    description: "Full-stack personal finance dashboard with JWT-based authentication. Integrated Google Gemini 2.5 Flash API to analyze 90 days of user transaction data and generate personalized financial insights. Designed a real-time dashboard with Recharts.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Google Gemini API"],
    github: "https://github.com/guptaakarshan/expense_tracker",
    live: "https://expense-tracker-six-pi-11.vercel.app/",
    image: "/spendsense.png",
  },
  {
    title: "Konvo",
    category: "Video Conferencing Platform",
    description: "A full-stack video conferencing application featuring real-time video/audio streaming, screen sharing, and live chat. Engineered with WebRTC and Socket.io for efficient peer-to-peer signaling and data transfer. Built secure RESTful APIs to manage user authentication and persist meeting history.",
    tech: ["MERN Stack", "WebRTC", "Socket.IO", "Material UI", "JWT"],
    github: "https://github.com/guptaakarshan/video-conferencing",
    live: "https://video-conferencing-frontend-ovq6.onrender.com/",
    image: "/konvo.png",
  },
  {
    title: "Blogify",
    category: "Blogging Platform",
    description: "A full-stack MERN blogging platform featuring secure Google OAuth 2.0 authentication. Engineered with a responsive React UI and a RESTful Express backend to support creating, editing, and managing blogs alongside a comprehensive commenting system.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Google OAuth"],
    github: "https://github.com/guptaakarshan/BLOG-APP-new",
    live: "https://blog-app-new-liard.vercel.app/",
    image: "/blogify.png",
  }
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"]
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group relative flex flex-col md:flex-row items-center gap-8 md:gap-16 bg-surface/20 border border-white/5 rounded-[2.5rem] p-6 md:p-12 hover:bg-surface/40 transition-colors duration-700"
    >
      <div className="w-full md:w-1/2 space-y-6">
        <div>
          <p className="text-accent text-xs tracking-widest uppercase mb-3 font-medium">{project.category}</p>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{project.title}</h3>
        </div>
        
        <p className="text-secondary text-base md:text-lg leading-relaxed font-light">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((tech, i) => (
            <span key={i} className="px-4 py-1.5 bg-white/5 text-white/70 text-xs rounded-full border border-white/10">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6 pt-6">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary hover:text-white transition-colors group/link">
            <FiGithub size={20} />
            <span className="text-sm font-medium">Source</span>
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary hover:text-white transition-colors group/link">
            <FiExternalLink size={20} />
            <span className="text-sm font-medium">Live Demo</span>
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/2 aspect-[16/10] sm:aspect-video rounded-3xl bg-[#0a0a0a] border border-white/10 relative overflow-hidden group/image shadow-2xl shadow-black/50">
        <div className="absolute inset-0 bg-black/50 group-hover/image:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-center transition-transform duration-700 scale-105 group-hover/image:scale-100" 
        />
        <div className="absolute inset-0 border border-white/10 rounded-3xl z-20 pointer-events-none"></div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 w-full relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-sm font-medium tracking-widest text-secondary uppercase mb-3">Selected Works</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Featured Projects.</h3>
        </motion.div>

        <div className="space-y-12 md:space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
