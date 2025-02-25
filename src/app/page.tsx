"use client"
import Nav from "@/components/Nav";
import Starfield from "react-starfield";
import Projects from "@/components/Projects";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import {motion} from "framer-motion"
import Marquee from "@/components/Marquee";

export default function Home() {
  
  return (
    
   <div className="min-h-screen py-10  flex flex-col items-center relative overflow-hidden">
        <Starfield
          starCount={1000}
          starColor={[255, 255, 255]}
          speedFactor={0.05}
          backgroundColor="#111827"/>
        <div className="flex  justify-center">
          
           <Nav/>
        </div>
       {/* <Emoji/> */}
        <Hero/>
        <Projects/>
          <Card/>
          <Card/>
          <Card/>
          <Marquee/>

        <footer>
          hello from pagalworld
        </footer>
    </div>
  );
}
