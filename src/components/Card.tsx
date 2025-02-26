import Image from "next/image";
import CardBrief from "./CardBrief";
import { Calistoga, DotGothic16, Inter } from 'next/font/google';
import Link from "next/link";
import React from "react";
import { GoDot } from "react-icons/go";
import MotionButton from "./MotionButton";

const calistoga = Calistoga({
    weight:"400",
    subsets: ["latin"],
  });

 const inter = Inter({
     weight:"700",
     subsets: ["latin"],
   }); 

type CardProps = {
  heading: string,
  brief: string[],
}

export default function Card({brief, heading}:CardProps) {
  return (
    <>
        <div className="container  md:pt-16   px-8 md:px-0 md:pl-8 rounded-lg 
               bg-[#866e6e20]  mx-auto h-5/6 md:h-9/12  overflow-hidden  w-full mt-20 ">
          <div className="pt-6  md:space-x-16 flex flex-col md:flex-row   rounded-3xl">
             <div className="flex md:pt-4 flex-col md:w-[55%]">
              <div className={inter.className}>
                  <div className="flex items-center gap-4 mb-1">
                  <h1 className="inline-block bg-gradient-to-r from-purple-300  to-green-300 bg-clip-text uppercase text-transparent">AI Manager</h1>
                  <h1 className="inline-block bg-gradient-to-r from-purple-300  to-green-300  bg-clip-text uppercase text-transparent">2025</h1>
              </div>
              </div>
                <div className={calistoga.className}>
                  <h1 className="text-2xl sm:text-3xl text-white max-w-72 md:max-w-screen-md ">{heading}</h1>
                </div>
              <div className="border border-white/10 mt-4"/>
              <div className="flex flex-col items-start">
                 {brief.map((point, index)=>(
                  <CardBrief key={index} text={point}/>
                  ))}
              </div>
              <button className="w-full md:px-2 mt-6  rounded-lg py-2 bg-white/100 text-zinc-900">
                <Link href={"/"}>View Live Site</Link>
              </button>
            </div>
  
            <div className="w-full  h-32 md:h-72 md:w-96 rounded-t-lg  bg-white/50 mt-10">
               <p className="text-zinc-800 text-center mt-20">coming soon..</p>
            </div>
          </div>
        </div>
</>
  )
}
