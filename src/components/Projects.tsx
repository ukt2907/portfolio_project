import React from 'react'
import MotionHero from './MotionHero'
import Brief from './Brief'

export default function Projects() {
  return (
        <div className="mt-[45vh]  ">
            <div className="flex flex-col items-center">
            <MotionHero headingName="Featured Projects"/>
            <Brief para="See how I transformed concepts into engaing digital experiences"/>
            </div>
        </div>
  )
}
