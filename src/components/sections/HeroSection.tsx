import React from 'react';
import { avatar } from '../assets/images';
import { ChevronDown, Github, Linkedin, Twitter, MessageCircle, Download, Eye } from 'lucide-react';
import { Button } from '../ui/button';
import { useScrollReveal } from '../hooks/useScrollReveal';
// import { ImageWithFallback } from '../figma/ImageWithFallback';

export const HeroSection: React.FC = () => {
  const [ref, isVisible] = useScrollReveal(0.3);

  const socialLinks = [
    { icon: Twitter, href: 'https://x.com/', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: MessageCircle, href: '#', label: 'WhatsApp' },
  ];

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      style={{ background: 'var(--color-bg)' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        {/* <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20 blur-3xl bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-alt)]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl bg-gradient-to-r from-[var(--color-accent-alt)] to-[var(--color-accent)]" /> */}
      </div>

      <div className="mt-[5%] max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16  items-center">
          {/* Left Column - Text Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : ''}`}>
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full glass-subtle">
                <span className="text-md flex items-center justify-center text-[var(--color-text-secondary)]">
                  <span className='text-4xl mr-1'>👋</span> Hello, I'm
                </span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className=" text-[var(--color-text-primary)]">Pererat </span>
                <span className=" bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-alt)] bg-clip-text text-transparent">
                  Timothy
                </span>
              </h1>
              
              <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-lg">
                Frontend Developer & Problem Solver crafting beautiful, 
                user-centered digital experiences with modern technologies.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-alt)] hover:opacity-90 transition-opacity text-md hover:translate-y-[-2px]"
              >
                <Eye className="w-5 h-5 mr-2" />
                View Projects
              </Button>
              <Button variant="outline" className="glass-subtle border-[var(--color-glass-border)] text-md hover:translate-y-[-2px] duration-300">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="sm"
                  className={`w-10 h-10 rounded-full glass-subtle border-0 transition-all hover:scale-110 ${
                    isVisible ? 'animate-fade-in' : ''
                  }`}
                  style={{ animationDelay: `${index * 100 + 600}ms` }}
                >
                  <social.icon className="w-4 h-4" />
                </Button>
              ))}
            </div>
          </div>

          {/* Right Column - Avatar/Portrait */}
          <div className={`flex justify-center lg:justify-end ${isVisible ? 'animate-slide-in-right' : ''}`}>
            <div className="relative">
              {/* Glass Container */}
              <div className="glass rounded-3xl p-8 max-w-md">
                <div className="relative">
                  {/* Avatar */}
                  <div className="w-80 h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-accent-alt)]/10 flex items-center justify-center">
                    <img
                      src={avatar}
                      alt="Pererat Timothy"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 glass-subtle rounded-xl px-3 py-2">
                    <span className="text-md font-medium text-[var(--color-accent)]">Frontend Dev</span>
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 glass-subtle rounded-xl px-3 py-2">
                    <span className="text-md font-medium text-[var(--color-text-secondary)]">@dev_rex</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -z-10 top-8 right-8 w-4 h-4 rounded-full bg-[var(--color-accent)] opacity-60" />
              <div className="absolute -z-10 bottom-16 left-8 w-3 h-3 rounded-full bg-[var(--color-accent-alt)] opacity-40" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className={`glass-subtle rounded-full p-3 ${isVisible ? 'animate-fade-in' : ''}`} style={{ animationDelay: '1s' }}>
            <ChevronDown className="w-5 h-5 text-[var(--color-text-secondary)] animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};