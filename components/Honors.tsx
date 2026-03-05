'use client';

import { motion } from 'motion/react';
import { Award } from 'lucide-react';

const awards = [
  {
    title: 'Monte Ahuja Scholarship Recipient',
    date: 'May 2024',
    association: 'Cleveland State University',
    description: '$6,000 merit-based scholarship for academic excellence',
  },
];

export function Honors() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <h3 className="text-xl font-mono text-zinc-500 uppercase tracking-widest">06. Honors & Awards</h3>
      
      <div className="grid grid-cols-1 gap-6">
        {awards.map((award, idx) => (
          <div key={idx} className="flex gap-4 p-6 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl">
            <div className="mt-1">
              <Award className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-lg font-medium text-zinc-100">{award.title}</h4>
              <div className="text-sm font-mono text-zinc-500 mt-1">{award.date}</div>
              <div className="text-emerald-400 mt-2 text-sm">{award.association}</div>
              <p className="text-zinc-400 mt-2 leading-relaxed">{award.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
