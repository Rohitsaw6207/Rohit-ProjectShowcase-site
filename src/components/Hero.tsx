import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Interactive Background with Mouse Effect */}
      <div className="absolute inset-0 opacity-20">
        {/* Large floating particles */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-primary rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 left-40 w-2 h-2 bg-accent rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-40 w-5 h-5 bg-primary/70 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-10 w-3 h-3 bg-secondary/70 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-10 right-10 w-2 h-2 bg-accent/70 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }}></div>
        
        {/* Medium particles */}
        <div className="absolute top-32 left-1/3 w-2 h-2 bg-primary/50 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute top-60 right-1/3 w-3 h-3 bg-secondary/50 rounded-full animate-float" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-accent/50 rounded-full animate-bounce" style={{ animationDelay: '1.3s' }}></div>
        <div className="absolute bottom-60 right-1/4 w-4 h-4 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '1.8s' }}></div>
        
        {/* Small particles */}
        <div className="absolute top-24 left-1/2 w-1 h-1 bg-secondary/60 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
        <div className="absolute top-80 right-1/2 w-1 h-1 bg-accent/60 rounded-full animate-float" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute bottom-24 left-2/3 w-1 h-1 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute bottom-80 right-2/3 w-2 h-2 bg-secondary/40 rounded-full animate-pulse" style={{ animationDelay: '1.7s' }}></div>
        
        {/* Extra particles for density */}
        <div className="absolute top-16 left-3/4 w-1 h-1 bg-accent/40 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
        <div className="absolute top-96 right-3/4 w-1 h-1 bg-primary/40 rounded-full animate-float" style={{ animationDelay: '0.9s' }}></div>
        <div className="absolute bottom-16 left-1/6 w-1 h-1 bg-secondary/40 rounded-full animate-bounce" style={{ animationDelay: '1.4s' }}></div>
        <div className="absolute bottom-96 right-1/6 w-1 h-1 bg-accent/40 rounded-full animate-pulse" style={{ animationDelay: '1.9s' }}></div>
        
        {/* Dynamic moving elements */}
        <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full animate-orbit"></div>
        <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-gradient-to-r from-secondary to-accent rounded-full animate-orbit-reverse"></div>
        <div className="absolute top-1/2 right-1/2 w-3 h-3 bg-gradient-to-r from-accent to-primary rounded-full animate-spiral"></div>
      </div>

      {/* Interactive Mouse Effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(var(--primary-rgb, 59, 130, 246), 0.1), transparent 40%)'
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
          e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
        }}
      ></div>

      <div className="hero bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 relative z-10 w-full">
        <div className="hero-content w-full max-w-7xl mx-auto px-4">
          {/* Mobile Layout - Centered */}
          <div className="flex flex-col items-center text-center lg:hidden">
            <div className="avatar mb-8 animate-fade-in">
              <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 hover:scale-110 hover:-rotate-3 transition-all duration-300 shadow-2xl">
                <img
                  src="/002.jpg"
                  alt="Rohit Kumar"
                  className="rounded-full"
                />
              </div>
            </div>
            
            <div className="animate-slide-up">
              <p className="text-lg mb-2 text-base-content/70 animate-fade-in">Hello, I'm</p>
              <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-slide-up">
                Rohit Kumar
              </h1>
              <p className="text-2xl mb-8 text-base-content/80 animate-fade-in">Full Stack Developer</p>
              
              <div className="flex gap-4 justify-center mb-8">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="btn btn-primary btn-lg hover:scale-105 transition-transform duration-300 animate-fade-in shadow-lg"
                >
                  Portfolio
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn btn-outline btn-lg hover:scale-105 transition-transform duration-300 animate-fade-in shadow-lg"
                >
                  Contact Info
                </button>
              </div>
              
              <div className="flex gap-4 justify-center">
                <a
                  href="https://linkedin.com/in/rohit-kumar-saw6207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-outline hover:btn-primary hover:scale-110 transition-all duration-300 animate-fade-in shadow-lg"
                  style={{ animationDelay: '0.1s' }}
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/Rohitsaw6207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-outline hover:btn-primary hover:scale-110 transition-all duration-300 animate-fade-in shadow-lg"
                  style={{ animationDelay: '0.2s' }}
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="mailto:rohitku6207@gmail.com"
                  className="btn btn-circle btn-outline hover:btn-primary hover:scale-110 transition-all duration-300 animate-fade-in shadow-lg"
                  style={{ animationDelay: '0.3s' }}
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/916207322327"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-outline hover:btn-primary hover:scale-110 transition-all duration-300 animate-fade-in shadow-lg"
                  style={{ animationDelay: '0.4s' }}
                >
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Side by Side */}
          <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-16 xl:gap-24 w-full">
            {/* Profile Image */}
            <div className="flex-shrink-0 animate-fade-in">
              <div className="avatar">
                <div className="w-80 xl:w-96 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 hover:scale-110 hover:-rotate-3 transition-all duration-300 shadow-2xl hover:shadow-primary/25">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Rohit Kumar"
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
            
            {/* Details */}
            <div className="flex-1 max-w-2xl animate-slide-up">
              <p className="text-xl mb-4 text-base-content/70 animate-fade-in">Hello, I'm</p>
              <h1 className="text-6xl xl:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-slide-up">
                Rohit Kumar
              </h1>
              <p className="text-3xl xl:text-4xl mb-12 text-base-content/80 animate-fade-in">Full Stack Developer</p>
              
              <div className="flex gap-6 mb-12">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="btn btn-primary btn-lg hover:scale-105 transition-transform duration-300 animate-fade-in shadow-lg hover:shadow-primary/25"
                >
                  Portfolio
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn btn-outline btn-lg hover:scale-105 transition-transform duration-300 animate-fade-in shadow-lg"
                >
                  Contact Info
                </button>
              </div>
              
              <div className="flex gap-6">
                <a
                  href="https://linkedin.com/in/rohit-kumar-saw6207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-outline btn-lg hover:btn-primary hover:scale-110 transition-all duration-300 animate-fade-in shadow-lg"
                  style={{ animationDelay: '0.1s' }}
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/Rohitsaw6207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-outline btn-lg hover:btn-primary hover:scale-110 transition-all duration-300 animate-fade-in shadow-lg"
                  style={{ animationDelay: '0.2s' }}
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="mailto:rohitku6207@gmail.com"
                  className="btn btn-circle btn-outline btn-lg hover:btn-primary hover:scale-110 transition-all duration-300 animate-fade-in shadow-lg"
                  style={{ animationDelay: '0.3s' }}
                >
                  <Mail className="h-6 w-6" />
                </a>
                <a
                  href="https://wa.me/916207322327"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-outline btn-lg hover:btn-primary hover:scale-110 transition-all duration-300 animate-fade-in shadow-lg"
                  style={{ animationDelay: '0.4s' }}
                >
                  <Phone className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;