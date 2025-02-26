"use client"
import {motion} from "framer-motion"
import { Calistoga } from 'next/font/google';

const calistoga = Calistoga({
    weight:"400",
    subsets: ["latin"],
  });
 




export default function MotionHero({headingName}:{headingName: string}){

    return (
        <motion.div
        initial={{opacity:0, scale:0}}
        animate={{opacity:1, scale:1}}
        transition={{duration:0.5}}
        >
        <div className={calistoga.className}>
            <h1 className="text-4xl text-white   sm:text-5xl text-center max-w-72 sm:max-w-96">{headingName}</h1>
       </div>
        </motion.div>
    )
}