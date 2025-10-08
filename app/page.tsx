import About from "@/components/About";
import Contact from "@/components/Contact";
import FooterBar from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
//import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center overflow-x-hidden">
      <Navbar />
      <HeroGeometric 
        badge="Data Science Portfolio"
        title1="Turning Data into"
        title2="Actionable Insights"
      />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <FooterBar />
    </main>
  );
}
