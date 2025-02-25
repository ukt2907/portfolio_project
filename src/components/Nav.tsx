import Link from "next/link"

import Navlink from "./Navlink"


function Nav() {
  return (
        <>
          <div className="flex max-w-80   items-center justify-center">
             <nav className="fixed top-0 text-white p-4 ">
                <Navlink/>
              </nav> </div>
              

        </>
  )
}

export default Nav