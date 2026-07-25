'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Work & <span className="text-gradient">Experience</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto border-l-2 border-slate-800 pl-6 space-y-8 relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-[31px] top-1 p-1 bg-brand-blue rounded-full text-white">
              <Briefcase className="w-3 h-3" />
            </div>
            <div className="glass-card p-6 rounded-2xl border border-slate-800">
              <span className="text-xs text-brand-cyan font-semibold">Web Development Intern</span>
              <h3 className="text-lg font-semibold text-slate-100 mt-1">Codomax Digital Solutions</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Constructed user interface components, maintained Git and GitHub repository workflows, and collaborated on front-end features.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
