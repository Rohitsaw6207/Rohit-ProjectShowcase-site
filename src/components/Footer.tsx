import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-base-300 text-base-content border-t border-base-content/10">
      <div className="container mx-auto px-5 py-10">

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">

          {/* Left */}
          <div className="max-w-sm">
            <h3 className="text-xl font-bold">Rohit Kumar</h3>
            <p className="mt-2 text-sm text-base-content/70">
              Full-stack developer focused on building scalable web apps,
              AI tools, and modern SaaS products.
            </p>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {[
              { id: 'hero', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'projects', label: 'Projects' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="btn btn-ghost btn-sm hover:bg-base-200"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://github.com/Rohitsaw6207"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline hover:btn-primary"
            >
              <Github className="h-5 w-5" />
            </a>

            <a
              href="https://linkedin.com/in/rohit-kumar-saw6207"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline hover:btn-primary"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a
              href="mailto:rohitku6207@gmail.com"
              className="btn btn-circle btn-outline hover:btn-primary"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

        </div>

        <div className="divider my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-base-content/70">

          <p>
            © {new Date().getFullYear()} Rohit Kumar
          </p>

          <button
            onClick={() => scrollToSection('hero')}
            className="btn btn-ghost btn-sm hover:bg-base-200"
          >
            <ArrowUp className="h-4 w-4 mr-1" />
            Back to top
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;