import CardBrief from "./CardBrief";
import CardHeading from "./CardHeading";
import CardImage from "./CardImage";
import ProjectLink from "./ProjectLink";

export default function Card() {
  return (
    <>
        <div className="h-5/6 px-12  w-full mt-20 grid
                  md:w-9/12  ">
          <div className="px-7  pt-7 bg-white/10 rounded-3xl">
            <CardHeading cardName="AI Task Manager 🏢"/>
            <div className="border  mt-4"/>
            <div className="flex flex-col ">
            <CardBrief/>
            <CardBrief/>
            <CardBrief/>
            <ProjectLink/>
            <CardImage/>
            </div>
          </div>
        </div>
</>
  )
}
