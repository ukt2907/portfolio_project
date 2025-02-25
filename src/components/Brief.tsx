import { Inter } from "next/font/google"

const inter = Inter({
    weight:"400",
    subsets: ["latin"],
  });
export default function Brief({para}: {para: string}){
    return (
        <div className={inter.className}>
        <p className="text-sm text-zinc-400 min-w-10 mt-3 max-w-60 text-center ">
           {para}
        </p>

        </div>
    )
}





