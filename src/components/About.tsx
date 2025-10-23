import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-base-200/50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-24 h-24 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-20 h-20 bg-secondary rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-accent rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-1/3 w-28 h-28 bg-primary/50 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-lg text-base-content/70 mb-4 animate-fade-in">Get To Know More</p>
          <h2 className="text-4xl font-bold mb-8 animate-slide-up">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="flex justify-center">
            <div className="avatar animate-fade-in">
              <div className="w-80 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300">
                <img
                  src="003.jpg"
                  alt="Rohit Kumar"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="grid md:grid-cols-2 gap-6 max-w-md w-full">

                {/* Experience Card */}
                <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in w-full">
                  <div className="card-body items-center text-center">
                    <Briefcase className="h-8 w-8 text-primary mb-2 animate-pulse" />
                    <h3 className="card-title text-lg">Experience</h3>
                    <p className="text-base-content/70">Internship + Projects</p>
                    <p className="text-sm text-base-content/60">Full Stack & Backend (PHP, MERN)</p>
                  </div>
                </div>

                {/* Education Card */}
                <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in w-full" style={{ animationDelay: '0.2s' }}>
                  <div className="card-body items-center text-center">
                    <GraduationCap className="h-8 w-8 text-primary mb-2 animate-pulse" />
                    <h3 className="card-title text-lg">Education</h3>
                    <p className="text-base-content/70">B.Voc in Software Development</p>
                    <p className="text-sm text-base-content/60">MCKV Institute of Engineering</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="prose prose-lg max-w-none animate-slide-up">
              <p className="text-base-content/80 leading-relaxed">
                I’m a final-year B.VOC Software Development student with a strong academic record (current YGPA: 9.1) and a deep interest in full stack web development. I focus on building responsive, scalable, and modern web applications using the MERN stack and PHP technologies.
              </p>
              <br />
              <p className="text-base-content/80 leading-relaxed">
I’ve interned as a PHP backend developer at Trideon Tech and completed industrial trainings in Laravel and PHP Full Stack Development. I’ve also explored data analytics, earning certifications in Power BI and Advanced Excel, which strengthened my understanding of data visualization and insights. Alongside this, I have basic knowledge of Android development using Java and enjoy building scalable digital solutions while continuously learning and improving my skills.              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;