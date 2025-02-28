import { div } from "framer-motion/client";
import Brief from "./Brief";
import MotionButton from "./MotionButton";
import MotionHero from "./MotionHero";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
    weight:"400",
    subsets: ["latin"],
  });

export default function Hero() {
  return (
          <div className="hero flex flex-col items-center mt-28">
          <Image
          alt=""
          src={"/user.webp"}
          width={120}
          height={120}/>
          <div className="flex items-center gap-2 rounded-md bg-[#000000c4] mb-6 px-3 py-1">
             <div className="size-2.5 bg-green-500 relative rounded-full">
              <div className="size-2.5 absolute inset-0 bg-green-500  animate-ping rounded-full"/>
             </div>
             <div className={inter.className}>
             <span className="text-white">Available for new projects</span> 
             </div>
          </div>
        <MotionHero headingName="Animating Code for AI Dreams "/>
        <Brief para=" Hi! I'm Umesh, a Full-Stack Developer based in India.
            Ties animations directly to code and adds a dreamy, creative AI vibe."/>
        <div className="mt-8 flex flex-col gap-6 sm:flex sm:flex-row ">
          <MotionButton buttonName="Explore Me"/>
          <MotionButton buttonName="Let's Connect"/>
        </div>
    </div> 
  )
}


