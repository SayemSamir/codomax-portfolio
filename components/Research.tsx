'use client';

import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, ExternalLink } from 'lucide-react';

export default function Research() {
  return (
    <section id="research" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Research <span className="text-gradient">Interests</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Focusing on Machine Learning, Computer Vision, and computational optimization.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-2xl border border-slate-800 max-w-3xl mx-auto text-center"
        >
          <GraduationCap className="w-12 h-12 text-brand-cyan mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Academic Research Focus</h3>
          <p className="text-xs text-slate-400 leading-relaxed mb-6">
            Currently working on literature reviews, data collection, and feature modeling for research projects aimed at upcoming conference submissions.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://scholar.google.com"
              target="_blank"
              className="px-4 py-2 rounded-xl bg-slate-800 text-xs text-slate-200 hover:text-brand-blue flex items-center gap-2 border border-slate-700 transition"
            >
              Google Scholar <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://researchgate.net"
              target="_blank"
              className="px-4 py-2 rounded-xl bg-slate-800 text-xs text-slate-200 hover:text-brand-blue flex items-center gap-2 border border-slate-700 transition"
            >
              ResearchGate <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
