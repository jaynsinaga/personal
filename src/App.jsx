import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  useEffect(() => {
    // Enable subtle custom cursor only for fine pointer devices (desktop mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsPointerDevice(mediaQuery.matches);

    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    if (mediaQuery.matches) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black-deep text-cream selection:bg-cream selection:text-black-deep relative">
      {/* Subtle desktop cursor follower dot */}
      {isPointerDevice && (
        <div
          className="fixed pointer-events-none z-50 w-3 h-3 rounded-full bg-cream/30 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
          }}
        />
      )}

      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
