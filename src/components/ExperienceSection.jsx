import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, ArrowRight } from 'lucide-react';
import { focusAreas } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-24 md:py-36 border-b border-black-border relative bg-black-secondary overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-8 border-b border-black-border gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs uppercase tracking-ultra font-mono text-cream-muted">
                SECTION 04 // KEY FOCUS
              </span>
              <span className="h-px w-8 bg-black-border" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-cream">
              What I Like To Build
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-cream-secondary max-w-md font-light leading-relaxed">
            Rather than generic software experiments, my focus is directed toward three core competencies where reliability, data structure, and business logic matter most.
          </p>
        </div>

        {/* Timeline-like Editorial Vertical Flow */}
        <div className="relative">
          {/* Vertical Center/Side Guide Line */}
          <div className="hidden lg:block absolute left-[120px] top-6 bottom-6 w-px bg-black-border" />

          <div className="space-y-16 lg:space-y-24">
            {focusAreas.map((area, idx) => (
              <motion.div
                key={area.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Index / Line Anchor */}
                <div className="lg:col-span-2 flex items-center lg:flex-col lg:items-start gap-4">
                  <div className="relative z-10 flex items-center justify-center w-14 h-14 bg-black-deep border border-cream/30 text-cream font-display font-bold text-lg">
                    {area.number}
                  </div>
                  <span className="text-[10px] uppercase tracking-ultra font-mono text-cream-secondary hidden lg:block pt-1">
                    PILLAR #{idx + 1}
                  </span>
                </div>

                {/* Focus Content */}
                <div className="lg:col-span-10 bg-black-deep border border-black-border p-8 md:p-10 hover:border-cream/30 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-black-border">
                    <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-cream">
                      {area.title}
                    </h3>
                    <span className="text-xs font-mono uppercase tracking-wider text-cream-muted">
                      {area.tagline}
                    </span>
                  </div>

                  <p className="text-base text-cream-muted font-light leading-relaxed mb-8">
                    {area.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {area.highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 p-3 bg-black-surface/50 border border-black-border/60"
                      >
                        <ShieldCheck className="w-4 h-4 text-cream mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-cream-secondary leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
