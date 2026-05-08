import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { Code2, Globe } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';
import Magnetic from './Magnetic';
import CodolioIcon from './CodolioIcon';

const Footer = () => {
  return (
    <footer className="w-full py-12 border-t border-white/5 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tighter text-white">AKARSHAN</span>
          <span className="text-secondary text-sm">&copy; {new Date().getFullYear()}</span>
        </div>
        
        <div className="flex gap-6">
          <Magnetic>
            <a href="https://github.com/guptaakarshan" target="_blank" rel="noopener noreferrer" className="block text-secondary hover:text-white transition-colors p-2 -m-2" title="GitHub">
              <FiGithub size={20} />
            </a>
          </Magnetic>
          <Magnetic>
            <a href="https://www.linkedin.com/in/akarshan-gupta-455331258" target="_blank" rel="noopener noreferrer" className="block text-secondary hover:text-white transition-colors p-2 -m-2" title="LinkedIn">
              <FiLinkedin size={20} />
            </a>
          </Magnetic>
          <Magnetic>
            <a href="https://leetcode.com/u/akarshan_gupta/" target="_blank" rel="noopener noreferrer" className="block text-secondary hover:text-white transition-colors p-2 -m-2" title="LeetCode">
              <SiLeetcode size={20} />
            </a>
          </Magnetic>
          <Magnetic>
            <a href="https://codolio.com/profile/lightning" target="_blank" rel="noopener noreferrer" className="block text-secondary hover:text-white transition-colors p-2 -m-2" title="Codolio">
              <CodolioIcon size={20} className="text-secondary hover:text-white transition-colors" />
            </a>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
