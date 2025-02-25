import { Calistoga } from 'next/font/google';

const calistoga = Calistoga({
    weight:"400",
    subsets: ["latin"],
  });
export default function CardHeading({cardName}:{cardName: string}) {
  return (
    
         <div className={calistoga.className}>
            <h1 className="text-xl sm:text-5xl text- max-w-72 md:max-w-screen-md ">{cardName}</h1>
       </div>
  )
}
