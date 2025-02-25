import Brief from "./Brief";
import MotionButton from "./MotionButton";
import MotionHero from "./MotionHero";

export default function Hero() {
  return (
    <div className="hero flex flex-col items-center mt-44">
        <MotionHero headingName="Animating Code for AI Dreams "/>
        <Brief para=" Hi! I'm Umesh, a Full-Stack Developer based in India.
            Ties animations directly to code and adds a dreamy, creative AI vibe."/>
        <div className="mt-8 flex flex-col gap-6 sm:flex sm:flex-row ">
          <MotionButton buttonName="Explore Me"/>
          <MotionButton buttonName="Let's Connect"/>
        </div>
    </div>    
  )
}
