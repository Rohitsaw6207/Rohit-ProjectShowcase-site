import React from 'react';
import { Mail, Linkedin, Github, Globe, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Gmail',
      value: 'rohitku6207@gmail.com',
      href: 'mailto:rohitku6207@gmail.com',
      color: 'text-red-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/rohit-kumar-saw6207',
      href: 'https://linkedin.com/in/rohit-kumar-saw6207',
      color: 'text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Rohitsaw6207',
      href: 'https://github.com/Rohitsaw6207',
      color: 'text-gray-700'
    },
    {
      icon: Globe,
      label: 'Portfolio',
      value: 'Rohit Portfolio',
      href: '#',
      color: 'text-primary'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+91 6207322327',
      href: 'https://wa.me/916207322327',
      color: 'text-green-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-base-200/50 relative overflow-hidden">
      {/* Interactive Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-secondary rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-accent rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-primary/50 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full animate-orbit"></div>
        <div className="absolute bottom-1/2 left-10 w-6 h-6 bg-gradient-to-r from-secondary to-accent rounded-full animate-orbit-reverse"></div>
      </div>

      {/* Interactive Mouse Effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(var(--primary-rgb, 59, 130, 246), 0.15), transparent 40%)'
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
          e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-lg text-base-content/70 mb-4 animate-fade-in">Get in Touch</p>
          <h2 className="text-4xl font-bold mb-8 animate-slide-up">Contact Me</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* FIXED: Using flexbox with flex-wrap and justify-center for perfect centering */}
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer w-full max-w-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-body items-center text-center">
                  <contact.icon className={`h-12 w-12 mb-4 ${contact.color} animate-pulse`} />
                  <h3 className="card-title text-lg mb-2">{contact.label}</h3>
                  <p className="text-sm text-base-content/70 break-all">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <div className="card bg-base-100 shadow-xl max-w-2xl w-full animate-slide-up">
              <div className="card-body text-center">
                <h3 className="card-title justify-center text-2xl mb-4">
                  Let's Work Together!
                </h3>
                <p className="text-base-content/70 mb-6 text-center">
                  I'm always open to discussing new opportunities and interesting projects. 
                  Feel free to reach out if you'd like to collaborate or have any questions.
                </p>
                <div className="card-actions justify-center">
                  <a
                    href="mailto:rohitku6207@gmail.com"
                    className="btn btn-primary btn-lg hover:scale-105 transition-transform duration-300 shadow-lg"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Send Email
                  </a>
                  <a
                    href="https://wa.me/916207322327"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-lg hover:scale-105 transition-transform duration-300 shadow-lg"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;