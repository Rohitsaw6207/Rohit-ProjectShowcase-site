import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projectSections = [
    {
      title: 'Production Projects',
      description: 'Large-scale applications built for real-world use with modern technologies and best practices',
      projects: [
        {
          title: 'HitzChat',
          description: 'Real-time chat app with MERN stack, Socket.io, Tailwind + DaisyUI, featuring 32 themes',
          image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        },
        {
          title: 'Online Game Hub',
          description: 'Online gaming platform built with React and Firebase',
          image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        },
        {
          title: 'Pragati 2025',
          description: 'College tech-fest website - contributed to development team',
          image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        }
      ]
    },
    {
      title: 'Authentication Projects',
      description: 'Applications featuring secure user authentication systems and login functionality',
      projects: [
        {
          title: 'HitzChat',
          description: 'Real-time chat with secure authentication',
          image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        },
        {
          title: 'Online Game Hub',
          description: 'Gaming platform with user authentication',
          image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        },
        {
          title: 'Spotify Clone',
          description: 'Music streaming app with user authentication',
          image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        },
        {
          title: 'Netflix Clone',
          description: 'Video streaming platform with secure login',
          image: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        }
      ]
    },
    {
      title: 'My Portfolios',
      description: 'Personal portfolio websites showcasing my work and development journey',
      projects: [
        {
          title: 'MY Portfolio',
          description: 'Current portfolio website showcasing my work',
          image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        },
        {
          title: 'WIP Site',
          description: 'Work in progress portfolio site',
          image: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        },
        {
          title: 'Old Portfolio',
          description: 'Previous version of my portfolio',
          image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        }
      ]
    },
    {
      title: 'Android Applications',
      description: 'Mobile applications developed for Android platform using modern development practices',
      projects: [
        {
          title: 'Task Manager App',
          description: 'Android task management application with local database',
          image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        },
        {
          title: 'Weather Tracker',
          description: 'Android weather app with location-based forecasting',
          image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        }
      ]
    },
    {
      title: 'API Key Integration Projects',
      description: 'Applications that integrate with external APIs to fetch and display dynamic data',
      projects: [
        {
          title: 'Weather App',
          description: 'Weather forecasting with external API integration',
          image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        },
        {
          title: 'Pokédex',
          description: 'Pokemon database with API data fetching',
          image: 'https://images.pexels.com/photos/1310847/pexels-photo-1310847.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        }
      ]
    },
    {
      title: 'Small Game Projects',
      description: 'Interactive browser-based games built with JavaScript and modern web technologies',
      projects: [
        {
          title: 'Insect Catch Game',
          description: 'Interactive catching game with JavaScript',
          image: 'https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        },
        {
          title: 'Tic-Tac-Toe',
          description: 'Classic game with AI opponent',
          image: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        },
        {
          title: 'Breakout Game',
          description: 'Classic brick-breaking game',
          image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        },
        {
          title: 'Hangman',
          description: 'Word guessing game with interactive UI',
          image: 'https://images.pexels.com/photos/1310847/pexels-photo-1310847.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        }
      ]
    },
    {
      title: 'Basic Projects',
      description: 'Fundamental web development projects demonstrating core programming concepts and skills',
      projects: [
        {
          title: 'Calculator',
          description: 'Scientific calculator with advanced functions',
          image: 'https://images.pexels.com/photos/6686448/pexels-photo-6686448.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        },
        {
          title: 'Solar System Animation',
          description: 'Animated solar system with CSS and JavaScript',
          image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        },
        {
          title: 'Theme Clock',
          description: 'Digital clock with multiple themes',
          image: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        },
        {
          title: 'Simple Timer',
          description: 'Countdown timer with alarm functionality',
          image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        },
        {
          title: 'Myntra Clone',
          description: 'E-commerce platform clone',
          image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        },
        {
          title: 'Memory Cards',
          description: 'Memory matching card game',
          image: 'https://images.pexels.com/photos/1310847/pexels-photo-1310847.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        },
        {
          title: 'Bharat Clock',
          description: 'Indian timezone clock application',
          image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        },
        {
          title: 'To-do App',
          description: 'Task management application',
          image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        },
        {
          title: 'Typing Game',
          description: 'Speed typing test game',
          image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        },
        {
          title: 'FAQ Collapse',
          description: 'Collapsible FAQ section component',
          image: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        },
        {
          title: 'Quiz App',
          description: 'Interactive quiz application',
          image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        }
      ]
    },
    {
      title: 'Card Slider Projects',
      description: 'Interactive UI components featuring various card layouts and slider animations',
      projects: [
        {
          title: 'Card Effect Slider',
          description: 'Interactive card slider with effects',
          image: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        },
        {
          title: 'Landscape Card',
          description: 'Beautiful landscape card component',
          image: 'https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        },
        {
          title: 'Split Landing Page',
          description: 'Split screen landing page design',
          image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        },
        {
          title: 'Expanding Cards',
          description: 'Cards that expand on hover',
          image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        },
        {
          title: 'Vertical Slider',
          description: 'Vertical image slider component',
          image: 'https://images.pexels.com/photos/1310847/pexels-photo-1310847.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        },
        {
          title: 'Background Slider',
          description: 'Full-screen background slider',
          image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        }
      ]
    },
    {
      title: 'Minor Web Projects',
      description: 'Small-scale web components and interactive elements showcasing specific techniques',
      projects: [
        {
          title: 'Glitch Button',
          description: 'Button with glitch animation effect',
          image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        },
        {
          title: 'Hoverboard',
          description: 'Interactive hoverboard animation',
          image: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        },
        {
          title: 'Kinetic Loader',
          description: 'Animated loading spinner',
          image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        },
        {
          title: 'Loading Animation',
          description: 'Custom loading animations',
          image: 'https://images.pexels.com/photos/1310847/pexels-photo-1310847.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        },
        {
          title: 'Double Click Heart',
          description: 'Instagram-like double click heart',
          image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        },
        {
          title: '3D Boxes BG',
          description: '3D animated boxes background',
          image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        },
        {
          title: 'Dynamic BG',
          description: 'Dynamic animated background',
          image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        },
        {
          title: 'Interactive BG',
          description: 'Interactive particle background',
          image: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        }
      ]
    },
    {
      title: 'Other Projects (Data Analysis)',
      description: 'Data science and analytics projects using Python, machine learning, and visualization tools',
      projects: [
        {
          title: 'Sales Analytics Dashboard',
          description: 'Data visualization dashboard for sales analysis using Python and Pandas',
          image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        },
        {
          title: 'Customer Behavior Analysis',
          description: 'Machine learning project analyzing customer patterns and preferences',
          image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600',
          github: '#',
          demo: '#'
        }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Ultra Dynamic Animated Background */}
      <div className="absolute inset-0 opacity-15">
        {/* Large floating elements with gradients */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-primary via-secondary to-accent rounded-full animate-pulse blur-sm"></div>
        <div className="absolute top-40 right-10 w-32 h-32 bg-gradient-to-br from-secondary via-accent to-primary rounded-full animate-bounce blur-sm"></div>
        <div className="absolute bottom-40 left-10 w-28 h-28 bg-gradient-to-br from-accent via-primary to-secondary rounded-full animate-ping blur-sm"></div>
        <div className="absolute bottom-20 right-32 w-36 h-36 bg-gradient-to-br from-primary/80 via-secondary/80 to-accent/80 rounded-full animate-pulse blur-sm"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-secondary/80 via-accent/80 to-primary/80 rounded-full animate-bounce blur-sm"></div>
        
        {/* Medium floating elements */}
        <div className="absolute top-32 left-1/3 w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full animate-float"></div>
        <div className="absolute top-60 right-1/3 w-20 h-20 bg-gradient-to-r from-secondary to-accent rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-14 h-14 bg-gradient-to-r from-accent to-primary rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-60 right-1/4 w-22 h-22 bg-gradient-to-r from-primary/70 to-secondary/70 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Small particles with various shapes */}
        <div className="absolute top-24 left-1/2 w-8 h-8 bg-secondary/60 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-80 right-1/2 w-6 h-6 bg-accent/60 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-24 left-2/3 w-10 h-10 bg-primary/60 rounded-full animate-ping" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-80 right-2/3 w-7 h-7 bg-secondary/50 rounded-full animate-ping" style={{ animationDelay: '3.5s' }}></div>
        
        {/* Orbiting elements with different speeds */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full animate-orbit"></div>
        <div className="absolute bottom-1/4 left-1/4 w-14 h-14 bg-gradient-to-r from-secondary to-accent rounded-full animate-orbit-reverse"></div>
        <div className="absolute top-3/4 right-3/4 w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full animate-spiral"></div>
        <div className="absolute top-1/3 left-3/4 w-10 h-10 bg-gradient-to-r from-primary/70 to-accent/70 rounded-full animate-orbit" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-gradient-to-r from-secondary/70 to-primary/70 rounded-full animate-orbit-reverse" style={{ animationDelay: '4s' }}></div>
        
        {/* Additional dynamic elements */}
        <div className="absolute top-16 left-3/4 w-8 h-8 bg-accent/50 rounded-full animate-bounce" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-96 right-3/4 w-6 h-6 bg-primary/50 rounded-full animate-pulse" style={{ animationDelay: '1.8s' }}></div>
        <div className="absolute bottom-16 left-1/6 w-9 h-9 bg-secondary/50 rounded-full animate-float" style={{ animationDelay: '2.8s' }}></div>
        <div className="absolute bottom-96 right-1/6 w-7 h-7 bg-accent/50 rounded-full animate-bounce" style={{ animationDelay: '3.8s' }}></div>
        
        {/* Geometric shapes with rotation */}
        <div className="absolute top-1/3 left-1/5 w-12 h-12 bg-primary/40 rotate-45 animate-rotate-slow"></div>
        <div className="absolute top-2/3 right-1/5 w-10 h-10 bg-secondary/40 rotate-45 animate-rotate-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-4/5 w-14 h-14 bg-accent/40 rotate-45 animate-rotate-slow" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/6 right-2/3 w-8 h-8 bg-primary/30 rotate-12 animate-rotate-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/6 left-2/3 w-6 h-6 bg-secondary/30 rotate-12 animate-rotate-slow" style={{ animationDelay: '3s' }}></div>
        
        {/* Extra floating particles for density */}
        <div className="absolute top-12 left-1/8 w-4 h-4 bg-accent/40 rounded-full animate-float" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute top-72 right-1/8 w-5 h-5 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '1.3s' }}></div>
        <div className="absolute bottom-12 left-7/8 w-3 h-3 bg-secondary/40 rounded-full animate-ping" style={{ animationDelay: '2.3s' }}></div>
        <div className="absolute bottom-72 right-7/8 w-6 h-6 bg-accent/40 rounded-full animate-pulse" style={{ animationDelay: '3.3s' }}></div>
        
        {/* Wave-like elements */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse"></div>
        <div className="absolute top-2/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Enhanced Interactive Mouse Effect - Primary Layer */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          background: 'radial-gradient(1000px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(var(--primary-rgb, 59, 130, 246), 0.2), transparent 40%)'
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
          e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
        }}
      ></div>

      {/* Secondary mouse effect layer */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x2, 30%) var(--mouse-y2, 70%), rgba(var(--secondary-rgb, 236, 72, 153), 0.25), transparent 50%)'
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          e.currentTarget.style.setProperty('--mouse-x2', `${x + 20}%`);
          e.currentTarget.style.setProperty('--mouse-y2', `${y - 20}%`);
        }}
      ></div>

      {/* Tertiary mouse effect layer */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          background: 'radial-gradient(400px circle at var(--mouse-x3, 70%) var(--mouse-y3, 30%), rgba(var(--accent-rgb, 34, 197, 94), 0.3), transparent 60%)'
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          e.currentTarget.style.setProperty('--mouse-x3', `${x - 30}%`);
          e.currentTarget.style.setProperty('--mouse-y3', `${y + 30}%`);
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-lg text-base-content/70 mb-4 animate-fade-in">Browse My Recent</p>
          <h2 className="text-5xl font-bold mb-8 animate-slide-up bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Projects
          </h2>
        </div>

        <div className="max-w-7xl mx-auto space-y-20">
          {projectSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="animate-fade-in" style={{ animationDelay: `${sectionIndex * 0.2}s` }}>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4 animate-slide-up bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {section.title}
                </h3>
                <p className="text-lg text-base-content/70 max-w-3xl mx-auto animate-fade-in leading-relaxed">
                  {section.description}
                </p>
              </div>
              
              {/* PERFECT: 3 cards per row with slightly bigger size */}
              <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
                {section.projects.map((project, index) => (
                  <div
                    key={index}
                    className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:rotate-1 w-full animate-fade-in"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      minWidth: '340px',
                      maxWidth: '360px'
                    }}
                  >
                    <figure className="px-4 pt-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="rounded-xl object-cover w-full h-52 transition-transform duration-300 hover:scale-110"
                      />
                    </figure>
                    <div className="card-body text-center">
                      <h3 className="card-title text-lg justify-center font-bold">{project.title}</h3>
                      <p className="text-sm text-base-content/70 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="card-actions justify-center gap-2">
                        <a
                          href={project.github}
                          className="btn btn-outline btn-sm hover:scale-105 transition-transform duration-300 shadow-lg"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                          GitHub
                        </a>
                        <a
                          href={project.demo}
                          className="btn btn-primary btn-sm hover:scale-105 transition-transform duration-300 shadow-lg"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;