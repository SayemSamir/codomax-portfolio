'use client';

import { useState } from 'react';
import { Bot, X, Send, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AIChatModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hi! I'm Samir's AI Agent. Ask me anything about his skills, experience, or research!" },
  ]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      let botResponse = "Samir is focused on C++, Full-Stack Web Development, and Machine Learning research.";
      if (input.toLowerCase().includes('contact') || input.toLowerCase().includes('email')) {
        botResponse = "You can reach Samir directly through the contact section or via email at samir@example.com.";
      } else if (input.toLowerCase().includes('project')) {
        botResponse = "Samir has developed AI models, microservices, and micro-controller IoT simulations.";
      }
      setMessages((prev) => [...prev, { role: 'assistant', text: botResponse }]);
    }, 600);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-xl hover:scale-105 transition"
      >
        <Bot className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-6 z-50 w-80 sm:w-96 glass-card bg-slate-900/90 rounded-2xl border border-slate-800 shadow-2xl flex flex-col h-[450px] overflow-hidden"
          >
            <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-brand-cyan" />
                <span className="font-semibold text-sm">Samir AI Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex gap-2 text-xs ${
                    m.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {m.role === 'assistant' && <Bot className="w-4 h-4 text-brand-blue mt-1" />}
                  <div
                    className={`p-3 rounded-2xl max-w-[80%] ${
                      m.role === 'user'
                        ? 'bg-brand-blue text-white rounded-br-none'
                        : 'bg-slate-800 text-slate-200 rounded-bl-none'
                    }`}
                  >
                    {m.text}
                  </div>
                  {m.role === 'user' && <User className="w-4 h-4 text-slate-400 mt-1" />}
                </div>
              ))}
            </div>

            <div className="p-3 border-t border-slate-800 flex gap-2">
              <input
                type="text"
                placeholder="Ask a question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 bg-slate-800 text-slate-100 text-xs px-3 py-2 rounded-xl border border-slate-700 focus:outline-none"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-brand-blue rounded-xl text-white text-xs"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
