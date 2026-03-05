"use client";

import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "Cleveland State University",
    degree: "Master of Science in Computer Science",
    period: "Aug 2023 – May 2025",
    gpa: "CGPA: 3.81 / 4.0",
  },
  {
    school: "Sri Venkateswara University",
    degree: "Bachelor of Engineering in Computer Science",
    period: "Jul 2017 – Jul 2021",
    gpa: "CGPA: 8.0 / 10",
  },
];

export function Education() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <h3 className="text-xl font-mono text-zinc-500 uppercase tracking-widest">
        05. Education
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu, idx) => (
          <div
            key={idx}
            className="flex gap-4 p-6 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl"
          >
            <div className="mt-1">
              <GraduationCap className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-lg font-medium text-zinc-100">
                {edu.school}
              </h4>
              <div className="text-zinc-400 mt-1">{edu.degree}</div>
              <div className="flex justify-between items-center mt-4 text-sm font-mono text-zinc-500">
                <span>{edu.period}</span>
                <span className="text-emerald-500/80">{edu.gpa}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
