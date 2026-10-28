import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-black-deep text-cream py-16 border-t border-black-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-black-border/60">
          <div className="space-y-3">
            <a href="#home" className="inline-flex items-center gap-1.5 group">
              <span className="font-display text-2xl font-bold tracking-tight text-cream">
                REHAN
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cream group-hover:scale-125 transition-transform duration-200" />
            </a>
            <p className="text-xs uppercase tracking-widest text-cream-secondary font-mono">
              {personalInfo.role}
            </p>
            <p className="text-xs text-cream-muted font-light max-w-sm pt-1">
              Building functional digital systems, scalable databases, and analytical dashboards.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex items-center gap-5 text-xs uppercase tracking-widest text-cream-secondary">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream transition-colors flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span className="text-black-border">•</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream transition-colors flex items-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <span className="text-black-border">•</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-cream transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cream-muted hover:text-cream transition-colors px-3 py-2 border border-black-border hover:border-cream/40 bg-black-surface/50"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-cream-secondary font-mono gap-4">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>KLATEN, INDONESIA</span>
            <span>•</span>
            <span>BUILT WITH REACT &amp; TAILWIND</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
