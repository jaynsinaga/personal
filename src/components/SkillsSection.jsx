import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  Check, 
  Terminal,
  Cpu
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function SkillsSection() {
  const categoryIcons = {
    FRONTEND: <Code2 className="w-4 h-4 text-cream" />,
    BACKEND: <Server className="w-4 h-4 text-cream" />,
    'DATABASE & ANALYTICS': <Database className="w-4 h-4 text-cream" />,
    'TOOLS & WORKFLOW': <Wrench className="w-4 h-4 text-cream" />,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-24 md:py-36 border-b border-black-border relative bg-black-secondary"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-black-border">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs uppercase tracking-ultra font-mono text-cream-muted">
                SECTION 02 // CAPABILITIES
              </span>
              <span className="h-px w-8 bg-black-border" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-cream">
              Tools I Use To Build
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-cream-secondary max-w-md mt-4 md:mt-0 font-light leading-relaxed">
            A balanced stack optimized for operational web applications, relational data integrity, and high-clarity analytics.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((group) => (
            <motion.div
              key={group.category}
              variants={itemVariants}
              className="bg-black-deep border border-black-border p-6 flex flex-col justify-between hover:border-cream/30 transition-all duration-300 group"
            >
              <div>
                {/* Group Title with Icon */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-black-border">
                  <div className="flex items-center gap-2.5">
                    <span className="p-1.5 bg-black-surface border border-black-border group-hover:border-cream/20 transition-colors">
                      {categoryIcons[group.category] || <Terminal className="w-4 h-4 text-cream" />}
                    </span>
                    <h3 className="font-display text-xs font-bold tracking-widest text-cream uppercase">
                      {group.category}
                    </h3>
                  </div>
                </div>

                <p className="text-[11px] text-cream-secondary font-light mb-6 leading-relaxed">
                  {group.description}
                </p>

                {/* Compact Badges / Rows */}
                <div className="space-y-2.5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/item flex items-center justify-between py-2 px-3 bg-black-surface/50 border border-black-border/60 hover:border-cream/30 hover:bg-black-surface transition-all duration-200"
                    >
                      <span className="text-xs font-medium text-cream tracking-wide group-hover/item:text-cream-light">
                        {skill.name}
                      </span>
                      <span className="text-[10px] text-cream-secondary font-mono tracking-tight group-hover/item:text-cream-muted">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Minimal footer line */}
              <div className="mt-8 pt-4 border-t border-black-border/40 flex items-center justify-between text-[10px] uppercase font-mono text-cream-secondary">
                <span>VERIFIED</span>
                <span className="text-cream-muted">{group.skills.length} TECHNOLOGIES</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
