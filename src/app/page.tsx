import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Hero from "@/components/Hero";
import SkillsContainer from "@/components/SkillsContainer";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <div className="container px-8 z-40 absolute bg-[#190F27] mx-auto min-h-screen py-10 flex flex-col items-center overflow-hidden scroll-smooth">
      <div className="flex justify-center">
        <Nav />
      </div>
      <section >
        <Hero />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <footer></footer>
    </div>
  );
}
