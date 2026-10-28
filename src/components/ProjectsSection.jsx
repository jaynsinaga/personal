import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { projects, projectCategories } from '../data/portfolioData';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredProjects = activeCategory === 'ALL'
    ? projects
    : projects.filter((p) => p.filterCategory === activeCategory);

  return (
    <section
      id="projects"
      className="py-24 md:py-36 border-b border-black-border relative bg-black-deep"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-black-border gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs uppercase tracking-ultra font-mono text-cream-muted">
                SECTION 03 // ARCHIVE
              </span>
              <span className="h-px w-8 bg-black-border" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-cream">
              Featured Work
            </h2>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {projectCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-4 py-2 text-xs uppercase tracking-wider font-mono transition-all duration-200 border ${
                    isActive
                      ? 'border-cream text-cream bg-black-surface'
                      : 'border-black-border text-cream-secondary hover:text-cream hover:border-cream/40 bg-transparent'
                  }`}
                >
                  {cat}
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterBorder"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-cream"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
                className="group relative bg-black-secondary border border-black-border hover:border-cream/40 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
              >
                <div>
                  {/* Image Preview with Editorial Ratio & Zoom */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black-surface border-b border-black-border">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center filter grayscale-[30%] contrast-105 brightness-90 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-editorial"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black-deep/80 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Category & Index Pill */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-2.5 py-1 bg-black-deep/90 backdrop-blur-md border border-cream/20 text-[10px] uppercase font-mono tracking-wider text-cream">
                        {project.number} / {project.category}
                      </span>
                    </div>

                    {/* Action Links Pill Overlay */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-black-deep/90 backdrop-blur-md border border-black-border hover:border-cream text-cream-muted hover:text-cream transition-colors duration-200"
                          title="View Source on GitHub"
                          aria-label={`GitHub repository for ${project.title}`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-cream text-black-deep hover:bg-cream-light font-semibold transition-colors duration-200"
                          title="View Live Demonstration"
                          aria-label={`Live demo for ${project.title}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 md:p-8">
                    <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-cream mb-3 group-hover:text-cream-light transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-cream-muted font-light leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {project.details && (
                      <p className="text-xs text-cream-secondary font-light leading-relaxed mb-6 border-l border-cream/15 pl-3">
                        {project.details}
                      </p>
                    )}
                  </div>
                </div>

                {/* Tech Stack & Card Footer */}
                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 border-t border-black-border/50">
                  <div className="flex flex-wrap items-center gap-2 pt-4 mb-5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono uppercase tracking-wider text-cream-muted bg-black-surface px-2.5 py-1 border border-black-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Editorial Link Line */}
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-cream group-hover:text-cream-light">
                    <span className="flex items-center gap-1.5">
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 text-cream" />
                    </span>
                    <span className="text-[10px] font-mono text-cream-secondary font-normal">
                      ARCHIVE #{project.number}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
