import React from 'react';
import { Code, Palette, Zap, Users, Lightbulb, Target } from 'lucide-react';
import { useStaggeredReveal } from '../hooks/useScrollReveal';

interface Skill {
  category: string;
  icon: React.ElementType;
  skills: string[];
  color: string;
}

export const SkillsSection: React.FC = () => {
  const technicalSkills: Skill[] = [
    {
      category: 'Frontend Development',
      icon: Code,
      skills: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'HTML5', 'CSS3'],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      category: 'Styling & Design',
      icon: Palette,
      skills: ['Tailwind CSS', 'Styled Components', 'Sass', 'Figma', 'Adobe XD'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      category: 'Tools & Workflow',
      icon: Zap,
      skills: ['Git', 'Webpack', 'Vite', 'ESLint', 'Jest', 'Cypress'],
      color: 'from-green-500 to-teal-600'
    }
  ];

  const softSkills: Skill[] = [
    {
      category: 'Communication',
      icon: Users,
      skills: ['Team Collaboration', 'Client Relations', 'Technical Writing', 'Presentation'],
      color: 'from-orange-500 to-red-600'
    },
    {
      category: 'Problem Solving',
      icon: Lightbulb,
      skills: ['Critical Thinking', 'Debugging', 'Performance Optimization', 'Code Review'],
      color: 'from-yellow-500 to-orange-600'
    },
    {
      category: 'Project Management',
      icon: Target,
      skills: ['Agile/Scrum', 'Time Management', 'Priority Setting', 'Quality Assurance'],
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const [techRef, techVisibleItems] = useStaggeredReveal(technicalSkills.length, 100);
  const [softRef, softVisibleItems] = useStaggeredReveal(softSkills.length, 100);

  const SkillCard: React.FC<{ skill: Skill; index: number; isVisible: boolean }> = ({ skill, index, isVisible }) => (
    <div
      className={`glass rounded-2xl p-6 space-y-4 transition-all duration-500 hover:scale-105 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center space-x-3">
        <div className={`w-12 h-12 ${skill.color} rounded-xl bg-gradient-to-r p-[1px]`}>
          <div className="w-full h-full rounded-xl  flex items-center justify-center">
            <skill.icon className="w-6 h-6 text-white" />
          </div>
        </div>
        <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
          {skill.category}
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {skill.skills.map((item, skillIndex) => (
          <div
            key={item}
            className={`text-sm text-[var(--color-text-secondary)] p-2 rounded-lg dark:glass-subtle bg-gray-200 border-gray-400 dark:border-[var(--color-glass-border)] ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: `${index * 100 + skillIndex * 50 + 200}ms` }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="py-24"
      style={{ background: 'var(--color-bg)' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2">
            <span className="text-3xl font-medium text-[var(--color-accent)]">Expertise</span>
          </div>
          
          <h2 className="text-4xl font-bold text-[var(--color-text-primary)]">
            Skills & Technologies
          </h2>
          
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and soft skills 
            developed through years of professional experience.
          </p>
        </div>

        <div className="space-y-16">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-8 text-center">
              Technical Skills
            </h3>
            <div ref={techRef} className="grid md:grid-cols-3 gap-6">
              {technicalSkills.map((skill, index) => (
                <SkillCard
                  key={skill.category}
                  skill={skill}
                  index={index}
                  isVisible={techVisibleItems.has(index)}
                />
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-8 text-center">
              Soft Skills
            </h3>
            <div ref={softRef} className="grid md:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => (
                <SkillCard
                  key={skill.category}
                  skill={skill}
                  index={index}
                  isVisible={softVisibleItems.has(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};