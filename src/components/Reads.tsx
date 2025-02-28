import AboutHeading from "./AboutHeading";

export default function Reads() {
  return (
       <div className="h-80 rounded-xl  bg-white/10 px-8 border overflow-hidden w-full  mb-2 py-5 ">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="size-9 text-fuchsia-300"><path fill="currentColor" d="M12 1s0 7-2 9-9 2-9 2 7 0 9 2 2 9 2 9 0-7 2-9 9-2 9-2-7 0-9-2-2-9-2-9"></path></svg>
          <AboutHeading heading="My Reads" brief="Explore the books shaping my perspectives"/>
        </div>

      </div>
  )
}
