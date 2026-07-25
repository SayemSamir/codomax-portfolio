'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <p className="text-slate-400 text-sm">Have a question or collaboration idea? Send a message.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4"
          >
            <h3 className="text-lg font-semibold text-slate-100">Get in Touch</h3>
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <Mail className="w-4 h-4 text-brand-blue" />
              <span>contact@example.com</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-brand-cyan" />
              <span>Chattogram, Bangladesh</span>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-brand-blue"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-brand-blue"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              required
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-brand-blue"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white text-xs font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
            >
              <Send className="w-3.5 h-3.5" /> Send Message
            </button>

            {submitted && (
              <p className="text-xs text-emerald-400 text-center">Message sent successfully!</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
