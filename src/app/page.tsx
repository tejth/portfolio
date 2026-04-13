// src/app/page.tsx
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import AIAssistant from "@/components/sections/AIAssistant";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import ParticleBackground from "@/components/ui/ParticleBackground";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* Ambient background grid */}
      <div className="fixed inset-0 grid-bg opacity-40 pointer-events-none z-0" />
      
      {/* Animated particle background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navbar />

      {/* Page Sections */}
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <AIAssistant />
      <Contact />
      <Footer />
    </main>
  );
}
