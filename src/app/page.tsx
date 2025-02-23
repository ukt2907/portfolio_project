import Link from "next/link";

export default function Home() {
  return (
   <div>
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <Link href="/">Home</Link>
      <Link href="/Projects">Projects</Link>
      <Link href="/COntacts">Contact</Link>
    </nav>
    <div className="hero text-2xl mt-4">
       Hello, I'm Full-Stack  Dev & AI Enthusiast
    </div>
    </div>
  );
}
