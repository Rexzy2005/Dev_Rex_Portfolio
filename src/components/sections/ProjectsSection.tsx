import React, { useState } from 'react';
import { ExternalLink, Github, Code, Palette, Globe, Smartphone } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { useStaggeredReveal } from '../hooks/useScrollReveal';
// import { ImageWithFallback } from '../figma/ImageWithFallback';
import { project1, project2, project3, project4 } from '../assets/images';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  stack: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  icon: React.ElementType;
}

export const ProjectsSection: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A modern e-commerce platform with advanced filtering, payment integration, and real-time inventory management.',
      image: project1,
      stack: ['React', 'JavaScript', 'Tailwind CSS', 'Paystack'],
      category: 'Web App',
      icon: Globe,
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Design System',
      description: 'Comprehensive design system and component library built for scalability and consistency across products.',
      image: project2,
      stack: ['React', 'Storybook', 'CSS-in-JS', 'TypeScript'],
      category: 'Design System',
      icon: Palette,
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication and real-time transaction tracking.',
      image: project3,
      stack: ['React Native', 'TypeScript', 'Redux', 'Firebase'],
      category: 'Mobile App',
      icon: Smartphone,
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Developer Portfolio',
      description: 'Interactive portfolio website showcasing modern web development techniques and smooth animations.',
      image: project4,
      stack: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
      category: 'Portfolio',
      icon: Code,
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const [ref, visibleItems] = useStaggeredReveal(projects.length, 150);

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24"
      style={{ background: 'var(--color-surface)' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2">
            <span className="text-3xl font-medium text-[var(--color-accent)]">Portfolio</span>
          </div>
          
          <h2 className="text-4xl font-bold text-[var(--color-text-primary)]">
            Latest Projects
          </h2>
          
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in modern web technologies 
            and user-centered design principles.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl glass transition-all duration-500 hover:scale-[1.02] ${
                visibleItems.has(index) ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay on Hover */}
                <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="flex items-center justify-center h-full space-x-4">
                    {project.liveUrl && (
                      <Button size="sm" className="glass-subtle border-white/20 text-white hover:bg-white/20">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/20">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <project.icon className="w-6 h-6 text-[var(--color-accent)]" />
                    <span className="text-lg text-[var(--color-text-secondary)]">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">
                    {project.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className=" border-[#9CA3AF] text-sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="glass-subtle border-[var(--color-glass-border)] text-base"
          >
            <Github className="w-6 h-6 mr-2" />
            View All on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};