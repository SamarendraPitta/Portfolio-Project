"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-12">
      <div className="space-y-8 flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-mono text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for new opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-zinc-100">
            Samarendra Pitta
          </h1>
          <h2 className="text-2xl md:text-3xl text-zinc-400 font-light">
            Senior Software Engineer
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed pt-4">
            Passionate about building scalable backend systems, optimizing performance, and delivering high-quality, reliable software solutions. Proven track record of taking ownership of complex microservices and driving architectural improvements.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-4 text-sm font-mono text-zinc-400"
        >
          <a
            href="mailto:pitta.samarendra@gmail.com"
            className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
          >
            <Mail className="w-4 h-4" />
            pitta.samarendra@gmail.com
          </a>
          <a
            href="tel:+16694441146"
            className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
          >
            <Phone className="w-4 h-4" />
            +1 (669) 444-1146
          </a>
          <a
            href="https://linkedin.com/in/samarendra"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            linkedin.com/in/samarendra
          </a>
          <a
            href="https://github.com/SamarendraPitta"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
          >
            <Github className="w-4 h-4" />
            github.com/SamarendraPitta
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative w-48 h-48 md:w-64 md:h-64 shrink-0"
      >
        <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-2xl" />
        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-zinc-800 bg-zinc-900 flex items-center justify-center">
          {/* Replace this div with an <Image /> tag when you have your actual profile picture */}
          <span className="text-6xl md:text-8xl font-light text-zinc-700 tracking-tighter">SP</span>
        </div>
      </motion.div>
    </section>
  );
}
