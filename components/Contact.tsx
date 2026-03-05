'use client';

import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-8 max-w-2xl mx-auto text-center"
    >
      <h3 className="text-xl font-mono text-zinc-500 uppercase tracking-widest">07. Get In Touch</h3>
      
      <p className="text-lg text-zinc-400 leading-relaxed">
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>

      {/* Replace YOUR_FORM_ID with your actual Formspree ID */}
      <form 
        action="https://formspree.io/f/YOUR_FORM_ID" 
        method="POST"
        className="mt-8 space-y-4 text-left"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-mono text-zinc-500">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              required
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-100 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-mono text-zinc-500">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              required
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-100 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-mono text-zinc-500">Message</label>
          <textarea 
            id="message" 
            name="message"
            required
            rows={5}
            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-100 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none"
          />
        </div>
        <button 
          type="submit"
          className="w-full md:w-auto px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-medium rounded-lg flex items-center justify-center gap-2 transition-colors"
        >
          <Send className="w-4 h-4" />
          Send Message
        </button>
      </form>
    </motion.section>
  );
}
