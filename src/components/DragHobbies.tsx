"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type DragHobbiesProp = {
  name: string;
  containerRef: any
};

export default function DragHobbies({ name, containerRef }: DragHobbiesProp) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {

    const container = containerRef.current.getBoundingClientRect();

    const randomX = Math.random() * (container.width - 100);
    const randomY = Math.random() * (container.height - 100);

    setPosition({ x: randomX, y: randomY });
  }, []);

  return (
    <motion.div
      drag
      dragConstraints={containerRef}
      dragElastic={0.2}
      whileDrag={{ scale: 1.2 }}
      animate={{ x: position.x, y: position.y }} 
      className=" absolute rounded-3xl bg-green-500 text-zinc-800 font-semibold px-7 text-base py-1 text-center"
      
    >
      {name}
    </motion.div>
  );
}
