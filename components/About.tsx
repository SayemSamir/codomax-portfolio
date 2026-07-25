'use client';

import { motion } from 'framer-motion';
import { Brain, Code, Rocket, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Driven by curiosity in computing systems, algorithmic efficiency, and Machine Learning applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-2xl border border-slate-800"
          >
            <h3 className="text-xl font-semibold mb-4 text-brand-blue">Biography & Background</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              I am a Computer Science & Engineering student at BGC Trust University Bangladesh. My journey began with C++ and problem-solving, which evolved into building dynamic web solutions and studying Machine Learning architectures.
            </p>
            <div className="space-y-2 text-xs text-slate-400">
              <p><strong className="text-slate-200">Department:</strong> Computer Science & Engineering</p>
              <p><strong className="text-slate-200">Career Goal:</strong> AI/ML Engineering & Software Architecture</p>
              <p><strong className="text-slate-200">Languages:</strong> English, Bengali</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="glass-card p-4 rounded-xl border border-slate-800 flex gap-4 items-center">
              <Brain className="w-8 h-8 text-brand-cyan" />
              <div>
                <h4 className="text-sm font-semibold text-slate-200">Machine Learning & Data</h4>
                <p className="text-xs text-slate-400">Studying deep neural networks and data processing techniques.</p>
              </div>
            </div>
            <div className="glass-card p-4 rounded-xl border border-slate-800 flex gap-4 items-center">
              <Code className="w-8 h-8 text-brand-purple" />
              <div>
                <h4 className="text-sm font-semibold text-slate-200">Algorithmic Problem Solving</h4>
                <p className="text-xs text-slate-400">Practicing data structures and computational efficiency in C++.</p>
              </div>
            </div>
            <div className="glass-card p-4 rounded-xl border border-slate-800 flex gap-4 items-center">
              <Rocket className="w-8 h-8 text-brand-blue" />
              <div>
                <h4 className="text-sm font-semibold text-slate-200">Full-Stack Modern Web</h4>
                <p className="text-xs text-slate-400">Building scalable user interfaces using Next.js and Tailwind CSS.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
