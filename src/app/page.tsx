import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Hero from "@/components/Hero";
import SkillsContainer from "@/components/SkillsContainer";
import AboutMe from "@/components/AboutMe";
import Link from "next/link";
import Brief from "@/components/Brief";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import StarryBackground from "@/components/StarBackground";


export default function Home() {
  return (
    <div className="container px-8 z-40 absolute bg-[#190F27] mx-auto min-h-screen py-10 flex flex-col items-center overflow-hidden scroll-smooth">
      <StarryBackground/>
      <div className="flex justify-center">
        <Nav />
      </div>
      <section >
        <Hero />
      </section>
      <section className="scroll-mb-96" id="projects">
        <Projects />
      </section>
      <section id="about">
        <AboutMe />
      </section> 
      {/* <section id="contact">
        <Contact/> 
      </section> */}
      <Footer/>
    </div>
  );
}
