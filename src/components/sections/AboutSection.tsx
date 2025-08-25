import React from 'react';
import { Calendar, MapPin, Code, Coffee } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const AboutSection: React.FC = () => {
  const [ref, isVisible] = useScrollReveal(0.3);

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '10+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '100+' },
    { icon: Calendar, label: 'Years Experience', value: '2+' },
    { icon: MapPin, label: 'Based in', value: 'Nigeria' },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-24"
      style={{ background: 'var(--color-bg)' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Bio */}
          <div className={`space-y-6 ${isVisible ? 'animate-slide-in-left' : ''}`}>
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full">
                <span className="text-3xl font-medium text-[var(--color-accent)]">About Me</span>
              </div>
              
              <h2 className="text-4xl font-bold text-[var(--color-text-primary)]">
                Crafting Digital Experiences with Passion
              </h2>
              
              <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
                <p>
                  I'm a passionate Frontend Developer with over 3 years of experience building 
                  modern web applications. My journey began with curiosity about how websites work, 
                  and it has evolved into a deep love for creating seamless user experiences.
                </p>
                
                <p>
                  I specialize in React, JavaScript, and modern CSS frameworks, always staying 
                  up-to-date with the latest technologies and best practices. My goal is to bridge 
                  the gap between design and functionality, creating products that are both 
                  beautiful and performant.
                </p>
                
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Stats */}
          <div className={`${isVisible ? 'animate-slide-in-right' : ''}`}>
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-8">
                Quick Stats
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`text-center space-y-3 ${
                      isVisible ? 'animate-fade-in' : ''
                    }`}
                    style={{ animationDelay: `${index * 100 + 300}ms` }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-alt)] p-[1px] mx-auto">
                      <div className="w-full h-full rounded-full flex items-center justify-center">
                        <stat.icon className="w-5 h-5 text-white font-bold" />
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-2xl font-bold text-[var(--color-text-primary)]">
                        {stat.value}
                      </div>
                      <div className="text-sm text-[var(--color-text-secondary)]">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-[var(--color-border)]">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[var(--color-text-secondary)]">
                    Available for freelance work
                  </span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-green-500 font-medium">Online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};