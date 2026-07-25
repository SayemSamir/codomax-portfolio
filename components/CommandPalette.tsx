'use client';

import { useEffect, useState } from 'react';
import { Search, Code, User, Briefcase, GraduationCap, X } from 'lucide-react';

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const actions = [
    { title: 'View Projects', icon: Code, href: '#projects' },
    { title: 'About Samir', icon: User, href: '#about' },
    { title: 'Work Experience', icon: Briefcase, href: '#experience' },
    { title: 'Research & Papers', icon: GraduationCap, href: '#research' },
  ];

  const filtered = actions.filter((a) =>
    a.title.toLowerCase().includes(query.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 p-4">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center px-4 border-b border-slate-800">
          <Search className="w-5 h-5 text-slate-400 mr-3" />
          <input
            type="text"
            placeholder="Type a command or search... (Press Esc to close)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent py-4 text-slate-100 placeholder-slate-500 focus:outline-none"
            autoFocus
          />
          <button onClick={() => setIsOpen(false)}>
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>
        <div className="p-2 max-h-60 overflow-y-auto">
          {filtered.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 rounded-xl transition"
            >
              <item.icon className="w-5 h-5 text-brand-blue" />
              <span>{item.title}</span>
            </a>
          ))}
          {filtered.length === 0 && (
            <p className="p-4 text-center text-slate-500">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
