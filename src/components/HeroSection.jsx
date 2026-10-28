import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.3,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-28 md:pt-36 pb-12 overflow-hidden border-b border-black-border"
    >
      {/* Background subtle noise and gradient line */}
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col justify-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Eyebrow Label & Status Badge */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6"
            >
              <span className="text-[11px] md:text-xs font-semibold uppercase tracking-widest text-cream-muted border-l-2 border-cream pl-3">
                {personalInfo.eyebrow}
              </span>
              <span className="hidden sm:inline text-cream-secondary text-xs">•</span>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-black-surface border border-black-border text-[11px] uppercase tracking-wider text-cream-muted">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>{personalInfo.status}</span>
              </div>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-bold text-cream text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[4.75rem] leading-[1.02] tracking-tight uppercase mb-8"
            >
              I build digital systems that turn data into{' '}
              <span className="text-cream-muted italic font-normal tracking-normal lowercase">
                something
              </span>{' '}
              useful.
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-cream-muted leading-relaxed max-w-2xl font-light mb-10"
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons & Secondary Location */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 pt-2"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 bg-cream text-black-deep font-semibold text-xs uppercase tracking-widest transition-all duration-200 hover:bg-cream-light hover:shadow-lg active:scale-[0.99]"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 border border-cream/30 hover:border-cream bg-transparent text-cream font-medium text-xs uppercase tracking-widest transition-all duration-200 hover:bg-black-surface"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-cream-secondary group-hover:text-cream" />
              </a>

              <div className="flex items-center gap-2 text-xs text-cream-secondary sm:ml-2 pt-2 sm:pt-0">
                <MapPin className="w-3.5 h-3.5 text-cream-muted" />
                <span>Based in {personalInfo.shortLocation}</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Portrait Framing */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <motion.div
              variants={imageVariants}
              className="relative w-full max-w-sm sm:max-w-md lg:max-w-none group"
            >
              {/* Outer Decorative Editorial Frame */}
              <div className="absolute -inset-3 sm:-inset-4 border border-cream/15 pointer-events-none transition-colors duration-500 group-hover:border-cream/30" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cream pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cream pointer-events-none" />

              {/* Image Container with Editorial Monochrome / Warm Tone Treatment */}
              <div className="relative aspect-[4/5] overflow-hidden bg-black-surface border border-black-border">
                <img
                  src={personalInfo.profileImage}
                  alt={`Portrait of ${personalInfo.name} - ${personalInfo.role}`}
                  className="w-full h-full object-cover object-top filter grayscale contrast-110 brightness-95 group-hover:scale-[1.03] group-hover:grayscale-[40%] transition-all duration-700 ease-editorial"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Subtle dark vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black-deep/75 via-transparent to-transparent pointer-events-none" />

                {/* Floating Status Badge on Portrait */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-black-deep/90 backdrop-blur-md border border-cream/20 p-3 flex items-center justify-between"
                >
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-ultra text-cream-secondary">
                      Current Availability
                    </span>
                    <span className="text-xs font-semibold text-cream tracking-tight">
                      {personalInfo.statusDetail}
                    </span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </motion.div>
              </div>

              {/* Minimal Editorial Caption */}
              <div className="flex items-center justify-between pt-3 text-[10px] uppercase tracking-widest text-cream-secondary font-mono">
                <span>01 // PORTRAIT</span>
                <span>KLATEN, ID</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Row: Rotated Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-10 flex items-center justify-between text-cream-secondary text-xs relative z-10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-px bg-cream/30" />
          <span className="text-[10px] uppercase tracking-widest font-mono">
            Fullstack / Database / Analytics
          </span>
        </div>

        <a
          href="#about"
          className="group flex items-center gap-3 hover:text-cream transition-colors duration-200"
          aria-label="Scroll to explore about section"
        >
          <span className="text-[10px] uppercase tracking-ultra font-mono">Scroll to explore</span>
          <div className="w-5 h-8 border border-cream/30 rounded-full flex items-start justify-center p-1 group-hover:border-cream transition-colors duration-200">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="w-1 h-1.5 bg-cream rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
}
