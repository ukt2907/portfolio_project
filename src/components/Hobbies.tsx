"use client"
import { useRef } from "react";
import AboutHeading from "./AboutHeading";
import DragHobbies from "./DragHobbies";

const data = ["Gaming 🎮", "Cricket 🏏", "Music 🎵", "Reading 📘", "Fitness💪"];

export default function Hobbies() {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="w-full overflow-hidden border  rounded-xl  px-8  h-80 mb-2 py-5">
      <AboutHeading
        heading="Beyond the Code"
        brief="Explore my interests and hobbies beyond the digital realm"
      />
      <div ref={containerRef} className="h-3/4 relative">
        {data.map((hobby, index) => {
          return (
            <DragHobbies
              key={index}
              containerRef={containerRef}
              name={hobby}
            />
          );
        })}
      </div>
    </div>
  );
}
