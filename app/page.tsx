import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Honors } from "@/components/Honors";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-emerald-500/30">
      {/* Background effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[128px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 space-y-32">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Honors />
        <Contact />
      </div>
    </main>
  );
}
