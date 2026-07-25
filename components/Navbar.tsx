'use client';

import { useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X, Command } from 'lucide-react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Research', href: '#research' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-40 bg-slate-950/70 backdrop-blur-md border-b border-slate-800/80">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="font-extrabold text-xl tracking-tight text-slate-100">
          Samir<span className="text-brand-blue">.dev</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 text-sm text-slate-300 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-brand-blue transition">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 border-l border-slate-800 pl-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-slate-300 hover:text-brand-blue transition"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <div className="hidden lg:flex items-center gap-1 text-[10px] text-slate-400 bg-slate-800 px-2 py-1 rounded-md border border-slate-700">
              <Command className="w-3 h-3" />
              <span>K</span>
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 text-slate-300"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-300">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-slate-300 hover:text-brand-blue"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
