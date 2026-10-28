import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownToLine, Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo, navigation } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black-deep/85 backdrop-blur-md border-b border-black-border py-4'
          : 'bg-transparent border-b border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex items-center gap-1.5 focus:outline-none"
          aria-label="Rehan Home"
        >
          <span className="font-display text-xl md:text-2xl font-bold tracking-tight text-cream transition-colors duration-200">
            REHAN
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-cream group-hover:scale-125 transition-transform duration-200" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest text-cream-secondary">
          {navigation.map((item) => {
            const sectionId = item.href.replace('#', '') || 'home';
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative py-1 transition-colors duration-200 hover:text-cream ${
                  isActive ? 'text-cream font-medium' : ''
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-cream"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Download CV */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={personalInfo.cv}
            download="Rehan-CV.pdf"
            className="group relative inline-flex items-center gap-2 px-4 py-2 border border-cream/25 hover:border-cream bg-transparent hover:bg-cream text-cream hover:text-black-deep text-xs uppercase tracking-widest font-medium transition-all duration-200"
          >
            <span>Download CV</span>
            <ArrowDownToLine className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-cream p-2 -mr-2 focus:outline-none hover:text-cream-light"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Full-Screen Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-[73px] bg-black-deep/98 backdrop-blur-xl z-40 md:hidden flex flex-col justify-between px-8 py-12 border-t border-black-border"
          >
            <div className="flex flex-col gap-6">
              <span className="text-[10px] uppercase tracking-ultra text-cream-secondary">
                Navigation
              </span>
              <div className="flex flex-col gap-4">
                {navigation.map((item, index) => {
                  const sectionId = item.href.replace('#', '') || 'home';
                  const isActive = activeSection === sectionId;
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index, duration: 0.2 }}
                      className={`text-2xl font-display uppercase tracking-tight flex items-center justify-between border-b border-black-border/60 pb-3 ${
                        isActive ? 'text-cream font-semibold' : 'text-cream-muted'
                      }`}
                    >
                      <span>{item.name}</span>
                      {isActive ? (
                        <span className="w-2 h-2 rounded-full bg-cream" />
                      ) : (
                        <ArrowUpRight className="w-4 h-4 text-cream-secondary" />
                      )}
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-6">
              <a
                href={personalInfo.cv}
                download="Rehan-CV.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 border border-cream bg-cream text-black-deep text-xs uppercase tracking-widest font-semibold"
              >
                <span>Download CV</span>
                <ArrowDownToLine className="w-4 h-4" />
              </a>

              <div className="flex items-center justify-between text-xs text-cream-secondary pt-2">
                <span>Klaten, Indonesia</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available for work
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
