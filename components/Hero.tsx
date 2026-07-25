'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-brand-purple/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue text-xs font-semibold mb-6 backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4" />
          <span>Available for Internships & Research Projects</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4"
        >
          Gazi Sayem Uddin <span className="text-gradient">Samir</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-2xl font-medium text-slate-400 mb-6 max-w-3xl mx-auto"
        >
          Computer Science Student <span className="text-brand-blue">|</span> C++ Developer <span className="text-brand-purple">|</span> AI & ML Enthusiast
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Focused on algorithmic complexity, modern web applications, software design, and applying Machine Learning models to real-world domain challenges.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-4 mb-12"
        >
          <a
            href="#contact"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan text-white font-semibold text-sm shadow-lg shadow-brand-blue/20 hover:scale-105 transition flex items-center gap-2"
          >
            Get In Touch <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-8 py-4 rounded-full glass-card hover:bg-slate-800 text-slate-200 font-semibold text-sm transition flex items-center gap-2 border border-slate-700"
          >
            Download Resume <Download className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center items-center gap-6 text-slate-400"
        >
          <a href="https://github.com" target="_blank" className="hover:text-brand-blue transition">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-brand-blue transition">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:contact@example.com" className="hover:text-brand-blue transition">
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
