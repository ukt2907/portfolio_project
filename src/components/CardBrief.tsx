import { div } from "framer-motion/client";
import { BsChevronRight } from "react-icons/bs";
import { CornerDownRight } from 'lucide-react';

export default function CardBrief() {
  return (
<div >
    <div className="flex items-start gap-3 mt-4">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-corner-down-right"><polyline points="15 10 20 15 15 20"/><path d="M4 4v7a4 4 0 0 0 4 4h12"/></svg>
          <p className="text-sm font-extralight">Enhanced User experience by 30% by using ai</p>
        </div>
</div>
  )
}
