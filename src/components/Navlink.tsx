import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { TbMessage2 } from "react-icons/tb";

type IconButtonProps = {
  href: string;
  children: React.ReactNode;
};

const IconButton = ({ href, children }: IconButtonProps) => (
  <Link
    href={href}
    className="flex items-center  justify-center p-2 bg-[#252b3b] rounded-full"
  >
    {children}
  </Link>
);

export default function Navlink() {
  return (
    <div className="h-full text-white w-full flex gap-4 px-4 py-2
     bg-[#030303b5] rounded-full bg-clip-padding backdrop-filter
      backdrop-blur-lg bg-opacity-10">
      <IconButton href="/">
        <IoHomeOutline className="text-xl" />
      </IconButton>
      <IconButton href="/">
        <GrProjects className="text-xl" />
      </IconButton>
      <IconButton href="/">
        <FaRegUser className="text-xl" />
      </IconButton>
      <IconButton href="/">
        <TbMessage2 className="text-xl" />
      </IconButton>
    </div>
  );
}
