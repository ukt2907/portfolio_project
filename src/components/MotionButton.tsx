"use client"
import { motion } from "framer-motion"
export default function MotionButton({buttonName}: {buttonName: string}) {
  return (
   <motion.button
    whileHover={{scale:1.1}}
    whileTap={{scale:0.9}}
   
   >
      <a href="#_" className="relative border  inline-flex items-center justify-center px-4 py-2 overflow-hidden  tracking-tighter text-white bg-transparent rounded-lg group">
    <span className="absolute w-0 overflow-hidden h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 "></span>
    <span className="relative ">{buttonName}</span>
</a>
       
   </motion.button>
        
  )
}
