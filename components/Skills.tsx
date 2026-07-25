'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['C', 'C++', 'Python', 'Java', 'JavaScript'],
  },
  {
    title: 'Frontend Development',
    skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'React', 'Next.js'],
  },
  {
    title: 'Backend & Database',
    skills: ['Node.js', 'Express.js', 'MySQL', 'MongoDB', 'Firebase'],
  },
  {
    title: 'AI & Machine Learning',
    skills: ['Machine Learning', 'Deep Learning', 'TensorFlow', 'Scikit-Learn', 'Pandas'],
  },
  {
    title: 'Tools & Workflows',
    skills: ['Git', 'GitHub', 'VS Code', 'Linux', 'Postman', 'Figma'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Proficiency</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            A comprehensive overview of tools, frameworks, and programming languages I use across academic and industry applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-brand-blue/50 transition duration-300"
            >
              <h3 className="text-lg font-semibold mb-4 text-brand-blue">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-xl bg-slate-800/80 text-slate-300 text-xs font-medium border border-slate-700 hover:bg-brand-blue/20 hover:text-brand-blue transition cursor-default"
                  >
                    {skill}
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
