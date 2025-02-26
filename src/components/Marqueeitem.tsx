import { motion } from 'framer-motion';
import Image from 'next/image';


type  AnimationProp = {
    images?: {src: string}[],
    from: string,
    to:string,
    text?:string[]
}


export default function Marqueeitem({images, from,to, text}: AnimationProp) {
  return (
         <div className="flex relative">

        <motion.div
         initial={{x:`${from}`}}
         animate={{x:`${to}`}}
         transition={{duration:30, repeat: Infinity, ease:"linear"}}
         className="flex flex-shrink-0">
          {images?.map((image,index)=>(
            <Image 
             key={index}
             alt=""
             src={image.src}
             width={50}
             height={50}
             className="h-16 md:h-16 w-16 md:w-32 mr-7 md:mr-0"
            />
          ))}
        </motion.div>
        <motion.div
         initial={{x:`${from}`}}
         animate={{x:`${to}`}}
         transition={{duration:30, repeat: Infinity ,ease:"linear"}}
         className="flex flex-shrink-0">
          {images?.map((image,index)=>(
            <Image 
             key={index}
             alt=""
             src={image.src}
             width={50}
             height={50}
             className="h-16 md:h-16 w-16 md:w-32 mr-7 md:mr-0"
            />
          ))}
        </motion.div>
      </div>
  )
}
