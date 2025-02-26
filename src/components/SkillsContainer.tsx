"use client"
import { Calistoga, Inter } from "next/font/google";
import Marqueeitem from "./Marqueeitem";
import AboutHeading from "./AboutHeading";

const marquee = [
  {src:"/html.svg.svg"},
  {src:"/css.svg"},
  {src:"/javascript.svg"},
  {src:"/nodejs.svg"},
  {src:"/express.svg"},
  {src:"/mongodb.svg"},
  {src:"/tailwind.svg"},
  {src:"/typescript.svg"},
  {src:"/prisma.svg"},
  {src:"/github.svg"},
  {src:"/docker.svg"},
  {src:"/html.svg.svg"},
  {src:"/css.svg"},
  {src:"/javascript.svg"},
  {src:"/nodejs.svg"},
  {src:"/express.svg"},
  {src:"/mongodb.svg"},
  ]



export const SkillsContainer = () => {
  return (
    <>
        <div className="container w-full  mx-auto rounded-xl  px-8 border overflow-hidden h-80 mb-2 py-5">
        <AboutHeading heading="My Toolbox"  brief="Explore the technologies and tools I use to craft exceptional digital experiences."/>

        <div className="mt-8  flex flex-col gap-7">
          <Marqueeitem from={"0"} to={"-100%"} images={marquee}/>
          <Marqueeitem from={"-150%"} to={"0"} images={marquee}/>
        </div>
       </div>
    </>
  )
};

export default SkillsContainer;
