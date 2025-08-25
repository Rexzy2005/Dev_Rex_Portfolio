import React from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
// import { CaseStudiesSection } from './components/sections/CaseStudiesSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Skills } from './components/sections/Skills';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen" style={{ background: 'var(--color-bg)' }}>
        <Navbar />
        
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          {/* <CaseStudiesSection /> */}
          <SkillsSection />
          <ContactSection />
        </main>
      </div>
    </ThemeProvider>
  );
}