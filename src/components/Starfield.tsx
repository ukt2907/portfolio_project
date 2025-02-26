"use client"
import Starfield from "react-starfield";

export default function () {
  return (
    <div>
        <Starfield
          starCount={1000}
          starColor={[255, 255, 255]}
          speedFactor={0.05}
          backgroundColor="background: rgb(111,25,118);
background: radial-gradient(circle, rgba(111,25,118,1) 15%, rgba(48,15,63,1) 100%, rgba(2,6,16,1) 100%);"
          />
    </div>
  )
}
