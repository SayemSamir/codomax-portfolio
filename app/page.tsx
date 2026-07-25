'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Research from '@/components/Research';
import Contact from '@/components/Contact';
import CommandPalette from '@/components/CommandPalette';
import AIChatModal from '@/components/AIChatModal';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Research />
      <Contact />
      
      {/* Utilities */}
      <CommandPalette />
      <AIChatModal />
      
      <footer className="py-8 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>&copy; 2026 Gazi Sayem Uddin Samir. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
