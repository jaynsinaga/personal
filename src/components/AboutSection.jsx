import React from 'react';
import { motion } from 'framer-motion';
import { Award, Layers, Database, BarChart3, CheckCircle2 } from 'lucide-react';
import { aboutInfo } from '../data/portfolioData';

export default function AboutSection() {
  const highlightIcons = [
    <Award className="w-4 h-4 text-cream" />,
    <Layers className="w-4 h-4 text-cream" />,
    <Database className="w-4 h-4 text-cream" />,
    <BarChart3 className="w-4 h-4 text-cream" />,
  ];

  return (
    <section
      id="about"
      className="py-24 md:py-36 border-b border-black-border relative bg-black-deep overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Header / Section Identifier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Oversized Number & Editorial Section Title */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-4"
              >
                <span className="text-xs uppercase tracking-ultra font-mono text-cream-muted">
                  SECTION {aboutInfo.sectionNumber}
                </span>
                <span className="h-px w-10 bg-black-border" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-cream mb-6"
              >
                {aboutInfo.title}
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="hidden lg:block select-none"
              >
                <span className="font-display font-black text-black-surface/80 text-[10rem] xl:text-[12rem] leading-none block -ml-2 tracking-tighter">
                  {aboutInfo.sectionNumber}
                </span>
              </motion.div>
            </div>

            {/* Bottom Quote / Philosophy Statement */}
            <div className="hidden lg:block border-l border-cream/20 pl-4 py-2 mt-8">
              <p className="text-xs text-cream-secondary italic leading-relaxed">
                "Pragmatic software architecture prioritized over unnecessary complexity."
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Body & Highlights */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            {/* Lead Narrative */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7 }}
                className="text-xl sm:text-2xl md:text-3xl text-cream font-light leading-snug mb-8"
              >
                {aboutInfo.lead}
              </motion.p>

              <div className="space-y-6 text-cream-muted text-base leading-relaxed font-light mb-12">
                {aboutInfo.description.map((p, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    {p}
                  </motion.p>
                ))}
              </div>

              {/* Academic & Competency Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 mb-16">
                {aboutInfo.academicHighlights.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="p-5 bg-black-secondary border border-black-border hover:border-cream/30 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-1.5 bg-black-surface border border-black-border">
                        {highlightIcons[idx] || <CheckCircle2 className="w-4 h-4 text-cream" />}
                      </div>
                      <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-cream">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-cream-secondary leading-relaxed pl-9">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Statistics / Numbers Block */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-black-border"
            >
              {aboutInfo.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-cream">
                    {stat.value}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-cream-secondary mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
