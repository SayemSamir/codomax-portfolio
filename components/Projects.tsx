'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    desc: 'Fully responsive dynamic shopping application with search, filters, and shopping cart logic.',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Supervised ML Classification Model',
    desc: 'Automated predictive pipeline utilizing Scikit-learn for datasets preprocessing and scoring.',
    tags: ['Python', 'Scikit-learn', 'Pandas'],
    github: 'https://github.com',
    live: '#',
  },
  {
    title: 'Microcontroller Railway Station Model',
    desc: 'IoT hardware/software integration for automated tracking and signaling control logic.',
    tags: ['C++', 'Microprocessors', 'IoT'],
    github: 'https://github.com',
    live: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Selected projects across Web Development, Machine Learning, and Hardware Systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-2xl border border-slate-800 flex flex-col justify-between hover:border-brand-blue/50 transition duration-300"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <Folder className="w-8 h-8 text-brand-cyan" />
                  <div className="flex gap-3 text-slate-400">
                    <a href={proj.github} target="_blank" className="hover:text-brand-blue">
                      <Github className="w-5 h-5" />
                    </a>
                    {proj.live !== '#' && (
                      <a href={proj.live} target="_blank" className="hover:text-brand-blue">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">{proj.title}</h3>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">{proj.desc}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {proj.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] px-2.5 py-1 rounded-md bg-brand-purple/10 text-brand-purple border border-brand-purple/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
