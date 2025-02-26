"use client";  // ✅ Yeh line add karni hai

import Link from "next/link";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { TbMessage2 } from "react-icons/tb";

type IconButtonProps = {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  label: string
  onClick: () => void;
};

const IconButton = ({ href, children, isActive, onClick, label }: IconButtonProps) => (
  <Link href={href} onClick={onClick} className="relative group">
    <div
      className={`p-3 rounded-full flex-center transition-all duration-300 ${
        isActive ? "bg-white text-zinc-800" : "bg-[#252b3b] hover:bg-white hover:text-zinc-800"
      }`}
    >
      {children}
    </div>
    <span className="absolute top-14 left-1/2 -translate-x-1/2 
        text-sm text-white bg-gray-400 px-2  rounded-md
        backdrop-blur-lg bg-opacity-10  bg-clip-padding backdrop-filter
      opacity-0 group-hover:opacity-100 transition-all ease-out duration-300">
      {label}
    </span>
  </Link>
);

export default function Navlink() {
  const [activeTab, setActiveTab] = useState("/");

  return (
    <div
      className="h-full text-white w-full flex gap-5 px-3 py-1
        bg-gray-400 rounded-full bg-clip-padding backdrop-filter
        backdrop-blur-lg bg-opacity-10"
    >
      <IconButton href="/" label="Home" isActive={activeTab === "/"} onClick={() => setActiveTab("/")}>
        <IoHomeOutline className="text-xl" />
      </IconButton>
      <IconButton href="#projects" label="Projects" isActive={activeTab === "#projects"} onClick={() => setActiveTab("#projects")}>
        <GrProjects className="text-xl" />
      </IconButton>
      <IconButton href="#about" label="About" isActive={activeTab === "#about"} onClick={() => setActiveTab("#about")}>
        <FaRegUser className="text-xl" />
      </IconButton>
      <IconButton href="#contact" label="Contact" isActive={activeTab === "#contact"} onClick={() => setActiveTab("#contact")}>
        <TbMessage2 className="text-xl" />
      </IconButton>
    </div>
  );
}
