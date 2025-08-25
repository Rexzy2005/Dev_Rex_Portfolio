'use client'

import { useScrollAnimation, useStaggeredAnimation } from "../hooks/useScrollAnimation"

const technicalSkills = [
  { name: 'React', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Language' },
  { name: 'Next.js', level: 88, category: 'Framework' },
  { name: 'Tailwind CSS', level: 92, category: 'Styling' },
  { name: 'Node.js', level: 80, category: 'Backend' },
  { name: 'PostgreSQL', level: 75, category: 'Database' },
  { name: 'GraphQL', level: 70, category: 'API' },
  { name: 'AWS', level: 65, category: 'Cloud' },
]

const softSkills = [
  'Problem Solving',
  'Team Collaboration', 
  'Project Management',
  'Communication',
  'User Experience Design',
  'Agile Methodologies',
  'Code Review',
  'Technical Writing',
  'Mentoring',
  'Time Management'
]

function SkillBar({ skill, index }: { skill: typeof technicalSkills[0], index: number }) {
  const { elementRef, isVisible } = useStaggeredAnimation(index * 100)

  return (
    <div
      ref={elementRef}
      className={`animate-fade-up ${isVisible ? 'visible' : ''}`}
    >
      <div className="glass rounded-lg p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium">{skill.name}</span>
          <span className="text-sm text-primary">{skill.level}%</span>
        </div>
        
        <div className="w-full bg-muted/30 rounded-full h-2">
          <div 
            className={`bg-gradient-to-r from-primary to-blue-600 h-2 rounded-full transition-all duration-1000 ${
              isVisible ? 'w-full' : 'w-0'
            }`}
            style={{ width: isVisible ? `${skill.level}%` : '0%' }}
          />
        </div>
        
        <div className="text-xs text-muted-foreground mt-1">
          {skill.category}
        </div>
      </div>
    </div>
  )
}

function SoftSkillChip({ skill, index }: { skill: string, index: number }) {
  const { elementRef, isVisible } = useStaggeredAnimation(index * 80)

  return (
    <div
      ref={elementRef}
      className={`animate-fade-up ${isVisible ? 'visible' : ''}`}
    >
      <div className="glass rounded-full px-4 py-3 text-center hover:scale-105 transition-transform duration-200 cursor-default">
        <span className="font-medium text-sm">{skill}</span>
      </div>
    </div>
  )
}

export function Skills() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section id="skills" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={elementRef}
          className={`animate-fade-up ${isVisible ? 'visible' : ''}`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="glass rounded-full px-6 py-3 inline-block mb-6">
              <span className="text-sm font-medium text-primary">Skills & Expertise</span>
            </div>
            <h2 className="text-h2 mb-6">Technical Proficiency</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and soft skills developed 
              through hands-on experience and continuous learning.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Technical Skills */}
            <div>
              <h3 className="text-h3 mb-8">Technical Skills</h3>
              <div className="space-y-4">
                {technicalSkills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-h3 mb-8">Core Competencies</h3>
              <div className="grid grid-cols-2 gap-3">
                {softSkills.map((skill, index) => (
                  <SoftSkillChip key={skill} skill={skill} index={index} />
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 glass rounded-xl p-6">
                <h4 className="font-semibold mb-4">Currently Learning</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['React Native', 'Three.js', 'Rust', 'Docker'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-600/10 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-sm text-muted-foreground">
                  I believe in continuous learning and staying updated with the latest 
                  technologies and best practices in web development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}