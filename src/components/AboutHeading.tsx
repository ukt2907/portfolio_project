import { Calistoga, Inter } from "next/font/google";

  const calistoga = Calistoga({
      weight:"400",
      subsets: ["latin"],
    });

    const inter = Inter({
        weight:"700",
        subsets: ["latin"],
      });  
type AboutCardProps = {
    heading: string,
    brief: string
}      

export default function AboutHeading({brief,heading}:AboutCardProps) {
  return (
    <> 
       <div className={calistoga.className}>
         <h1 className="text-2xl sm:text-3xl text-white max-w-72 md:max-w-screen-md ">{heading}</h1>
       </div>  
       <div className={inter.className}>
           <p className="text-sm mt-3 text-zinc-400">{brief}</p>
        </div>
  </>
  )
}
