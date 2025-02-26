import { Inter } from "next/font/google"

const inter = Inter({
    weight:"400",
    subsets: ["latin"],
  });
export default function Brief({para}: {para: string}){
    return (
        <div className={inter.className}>
        <p className="text-lg text-zinc-400 min-w-10 mt-3 max-w-72 text-center ">
           {para}
        </p>

        </div>
    )
}





