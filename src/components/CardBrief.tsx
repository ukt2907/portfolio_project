import { div } from "framer-motion/client";
import { BsChevronRight } from "react-icons/bs";
import { CornerDownRight } from 'lucide-react';
import { Inter } from "next/font/google";

const inter = Inter({
    weight:"400",
    subsets: ["latin"],
  });

export default function CardBrief({text}: {text:string}) {
  return (
<>
<div className="flex items-start gap-3 mt-4">
         <img src="/tick2.svg" alt="tick" className="w-4 h-4" />
          <div className={inter.className}>
          <p className="text-xs text-zinc-400 font-extralight">{text}</p>
          </div>
    </div>
</>
  )
}
