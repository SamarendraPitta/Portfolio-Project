"use client";

import { motion } from "motion/react";
import { FolderGit2 } from "lucide-react";

const projects = [
  {
    name: "Distributed Data Store Replication System",
    date: "May 2025",
    highlights: [
      "Implemented a UDP-based distributed key-value store in C with gossip-based replication and eventual consistency.",
      "Designed versioning, conflict resolution, and integrity validation mechanisms to tolerate node failures.",
    ],
  },
  {
    name: "Medication Tracker",
    date: "Feb 2025",
    highlights: [
      "Developed a Spring Boot backend for medication adherence tracking with PostgreSQL persistence.",
      "Integrated Redis caching and AWS deployment for improved performance and scalability.",
    ],
  },
  {
    name: "RPC-Based Distributed Computing Platform",
    date: "Apr 2024",
    highlights: [
      "Designed and implemented a fault-tolerant distributed computing system in C using Sun RPC, supporting dynamic load balancing, multi-threaded job execution, and automatic rescheduling across 5-node clusters, enhancing system reliability and throughput by 45%.",
    ],
  },
  {
    name: "Savouring Insights Bigdata Project",
    date: "2024",
    highlights: [
      "An intelligent sentiment-based review analysis system for restaurants.",
      "Analyzed 40M restaurant reviews using Big Data technologies, performed sentiment analysis with classification model accuracy of 85%.",
      "Summarizes reviews into three categories: Food, Ambience, and Service.",
      "Skills: Python, Flask, +8 skills",
    ],
  },
  {
    name: "Car Rental Service",
    date: "2023",
    highlights: [
      "A car rental service offering reliable and convenient transportation solutions with a seamless booking experience.",
      "Hosted on a VPS and actively used by customers.",
      "Skills: JavaScript, Node.js, +4 skills",
    ],
  },
];

export function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <h3 className="text-xl font-mono text-zinc-500 uppercase tracking-widest">
        04. Projects
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group relative p-6 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl hover:bg-zinc-900/50 hover:border-emerald-500/30 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-6">
              <FolderGit2 className="w-8 h-8 text-emerald-400" />
              <span className="text-xs font-mono text-zinc-500">
                {project.date}
              </span>
            </div>
            <h4 className="text-lg font-medium text-zinc-100 mb-4 group-hover:text-emerald-300 transition-colors">
              {project.name}
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              {project.highlights.map((highlight, hIdx) => (
                <li key={hIdx} className="leading-relaxed">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
