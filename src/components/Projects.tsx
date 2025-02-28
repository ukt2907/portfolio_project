"use client"
import React, { useRef } from 'react'
import MotionHero from './MotionHero'
import Brief from './Brief'
import Card from './Card';
import { useScroll, motion } from 'framer-motion';

const projects = [
  {
    name: "AI Task Manager",
    brief: [
      "Enhanced User experience by 30% using AI",
      "Automated task scheduling with ML",
      "Integrated with Slack & Google Calendar"
    ],
    image: "/ai-task-manager.png",
    link: "https://github.com/yourproject"
  },
  {
    name: "E-commerce Platform ",
    brief: [
      "Optimized checkout process for faster sales",
      "Implemented dynamic pricing engine",
      "AI-powered product recommendations"
    ],
    image: "/ecommerce.png",
    link: "https://github.com/yourecommerce"
  },
  {
    name: "AI Task Manager",
    brief: [
      "Enhanced User experience by 30% using AI",
      "Automated task scheduling with ML",
      "Integrated with Slack & Google Calendar"
    ],
    image: "/ai-task-manager.png",
    link: "https://github.com/yourproject"
  }
];

export default function Projects() {

  const ref = useRef<HTMLDivElement>(null);
  const {scrollYProgress}=useScroll({
    target:ref,
    offset:["0 1", "0.5 1"]
  })

  return (
        <motion.div
          ref={ref}
          style={{
            scale: scrollYProgress,
            opacity:scrollYProgress
          }}
         className="mt-32 pb-10 ">
            <div className="flex flex-col items-center">
                <MotionHero headingName="Featured Projects"/>
                <Brief para="See how I transformed concepts into engaing digital experiences"/>
            </div>

            <div>
              {projects.map((project,i)=> (
                <Card 
                key={i}
                heading={project.name}
                brief={project.brief}/>
              ))}
            </div>
        </motion.div>
  )
}
