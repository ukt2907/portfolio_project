import Orbit from "./Orbit";

export default function Header() {
  return (
    <div className=" z-30 relative top-0  left-0 right-0 bottom-0 bg-gray-950 h-full w-full">
    <div className="orbit absolute-center inset-0 -z-10 rounded-full ">
        <div className="-z-10 absolute-center ">
            <Orbit/>
        </div>
        <div className="-z-10 absolute-center ">
            <Orbit className="size-[350px]"/>
        </div>
        <div className="-z-10 absolute-center ">
            <Orbit className="size-[500px]"/>
        </div>
        <div className="-z-10 absolute-center ">
            <Orbit className="size-[650px]"/>
        </div>
        </div>
    </div>
  )
}
