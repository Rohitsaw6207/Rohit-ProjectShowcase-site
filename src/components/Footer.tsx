import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-base-300 text-base-content">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Rohit Kumar</h3>
            <p className="text-base-content/70 mb-4">
              Full Stack Developer passionate about creating innovative web solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/Rohitsaw6207"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-outline btn-sm hover:btn-primary"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/rohit-kumar-saw6207"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-outline btn-sm hover:btn-primary"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:rohitku6207@gmail.com"
                className="btn btn-circle btn-outline btn-sm hover:btn-primary"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="link link-hover"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="link link-hover"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="link link-hover"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="link link-hover"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind CSS', 'DaisyUI'].map((tech) => (
                <span key={tech} className="badge badge-outline">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="divider"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-base-content/70">
            Developed by Rohit Kumar
          </p>
          <p className="text-base-content/70">
            © 2025 Rohit's project showcase site. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;