"use client";

import { motion } from "motion/react";

export function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h3 className="text-xl font-mono text-zinc-500 uppercase tracking-widest">
        01. About
      </h3>
      <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light max-w-3xl">
        Senior Software Engineer with 5+ years of experience designing and
        scaling reliable services using{" "}
        <span className="text-zinc-100 font-medium">
          Java, Spring Boot, Kafka, and AWS
        </span>{" "}
        across ERP and high-traffic platforms. Strong background in building
        clean APIs, event-driven workflows, and cloud-native systems with a
        focus on performance, reliability, and fault tolerance. Solid foundation
        in data structures, distributed systems, and software design principles,
        reinforced through industry experience and graduate-level teaching.
      </p>
    </motion.section>
  );
}
