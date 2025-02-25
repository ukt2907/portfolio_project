import { motion } from "framer-motion";

const marqueeVariants = {
  animate: {
    x: ["0","-50%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
};

export const Marquee = () => {
  return (
    <div className="overflow-hidden  w-full bg-gradient-to-r from-violet-600 to-indigo-600 mt-20 mb-2 py-5 bg-white/10">

    <motion.div
    animate="animate"
    variants={marqueeVariants}
    className="flex w-[200%] gap-8  mb-2  whitespace-nowrap flex-nowrap"> 
     <div className="flex gap-8">
          <p>Rendering</p>
          <p>Rendering</p>
          <p>Rendering</p>
          <p>Rendering</p>
          <p>Rendering</p>
          <p>Rendering</p>
          <p>Rendering</p>
        </div>
        <div className="flex gap-8">
          <p>Rendering</p>
          <p>Rendering</p>
          <p>Rendering</p>
          <p>Rendering</p>
          <p>Rendering</p>
          <p>Rendering</p>
          <p>Rendering</p>
        </div>
    </motion.div>
    </div>
  )
};

export default Marquee;
