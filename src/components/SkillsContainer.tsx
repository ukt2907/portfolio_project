"use client";
import { Calistoga, Inter } from "next/font/google";
import AboutHeading from "./AboutHeading"; // Assuming this is a custom component

// Define fonts (if you're using them elsewhere)
const calistoga = Calistoga({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"] });

// Marquee data with unique tech items
const marquee = [
  { src: "/html.svg.svg", label: "HTML5" },
  { src: "/css.svg", label: "CSS3" },
  { src: "/javascript.svg", label: "Javascript" },
  { src: "/nodejs.svg", label: "Node.js" },
  { src: "/express.svg", label: "Express" },
  { src: "/mongodb.svg", label: "MongoDB" },
  { src: "/tailwind.svg", label: "Tailwind CSS" },
  { src: "/typescript.svg", label: "Typescript" },
  { src: "/prisma.svg", label: "Prisma" },
  { src: "/github.svg", label: "Github" },
  { src: "/docker.svg", label: "Docker" },
];

/**
 * A component that displays a marquee of my skills, with two
 * versions: one moving left and one moving right.
 *
 * @returns A container with a marquee of my skills.
 */
const SkillsContainer = () => {
  return (
    <div className="container bg-[#2f132f] w-full mx-auto rounded-xl px-8 border overflow-hidden h-80 mb-2 py-5">
      <AboutHeading
        heading="My Toolbox"
        brief="Explore the technologies and tools I use to craft exceptional digital experiences."
      />

      <div className="mt-8 flex text-white flex-col gap-7">
        {/* Marquee moving left */}
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none py-0.5 gap-6 pr-6 animate-move-left [animation-duration:30s]">
            {[...marquee, ...marquee].map((item, index) => (
              <div
                key={`left-${index}`}
                className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
              >
                <img src={item.src} alt={item.label} className="size-10" />
                <span className="font-semibold">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee moving right */}
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none py-0.5 gap-6 pr-6 animate-move-right [animation-duration:30s]">
            {[...marquee, ...marquee].map((item, index) => (
              <div
                key={`right-${index}`}
                className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
              >
                <img src={item.src} alt={item.label} className="size-10" />
                <span className="font-semibold">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsContainer;