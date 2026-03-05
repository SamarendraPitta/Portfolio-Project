"use client";

import { motion } from "motion/react";

const experiences = [
  {
    role: "Software Developer",
    company: "The GRA Group",
    location: "Cleveland, OH",
    period: "June 2025 – Present",
  },
  {
    role: "Graduate Assistant",
    company: "Cleveland State University",
    location: "Cleveland, OH",
    period: "Aug 2024 – May 2025",
  },
  {
    role: "Software Engineer",
    company: "Infor",
    location: "Hyderabad, India",
    period: "Aug 2021 – Jun 2023",
  },
  {
    role: "Full Stack Developer",
    company: "Zettabyte Plus",
    location: "India",
    period: "Jun 2019 – Aug 2021",
  },
];

export function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      <h3 className="text-xl font-mono text-zinc-500 uppercase tracking-widest">
        03. Experience
      </h3>

      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-8 md:pl-0">
            <div className="hidden md:block absolute left-[-2rem] top-1.5 w-2 h-2 rounded-full bg-emerald-500 ring-4 ring-zinc-950" />
            <div className="hidden md:block absolute left-[-1.8rem] top-4 bottom-[-3rem] w-px bg-zinc-800 last:hidden" />

            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
              <div>
                <h4 className="text-xl font-medium text-zinc-100">
                  {exp.role}
                </h4>
                <div className="text-lg text-emerald-400">{exp.company}</div>
              </div>
              <div className="text-sm font-mono text-zinc-500 text-left md:text-right">
                <div>{exp.period}</div>
                <div>{exp.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
