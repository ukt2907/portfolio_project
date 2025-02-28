import { Link } from "lucide-react";
import Brief from "./Brief";
import { Inter } from "next/font/google";

const inter = Inter({
    weight:"400",
    subsets: ["latin"],
  });

export default function Footer() {
  return (
    <footer className="container md:px-56 mx-auto pt-16 w-full">
    <div className="border border-gray-300/10"/>
    <div className="flex pt-6 md:pt-0 flex-col md:flex-row md:justify-between items-center text-white">
      <div className="col-span-2">
        <Brief para="Created by Umesh💓"/>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
           <Link className={inter.className} href={"/"}>Github</Link>
           <Link className={inter.className} href={"/"}>Twitter</Link>
           <Link className={inter.className} href={"/"}>LinkedIn</Link>
      </div>
    </div>
  </footer>
  )
}
