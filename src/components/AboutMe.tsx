"use client"
import Brief from "./Brief";
import Hobbies from "./Hobbies";
import MotionHero from "./MotionHero";
import SkillsContainer from "./SkillsContainer";
import Reads from './Reads';
import Map from "./Map";


export default function AboutMe() {
  return (
    <div className="container mx-auto md:px-56   mt-44">
        <div className="flex flex-col  items-center">
           <MotionHero headingName="A Glimpse Into My World"/>
           <Brief para="Learn more about me who I am, what I do, and what inspires Me"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10  gap-5">
          <div className="h-80"><Reads/></div>
          <div className="h-80 md:col-span-2 bg-[#866e6e20]"><SkillsContainer/></div>
          <div className="h-80 overflow-hidden bg-[#866e6e20] md:col-span-2"><Hobbies/></div>
          <div className="h-80 "><Map/></div>
        </div>
    </div>
  )
}