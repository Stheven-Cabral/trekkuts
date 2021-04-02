import * as React from 'react'
import NavbarToggle from '../components/svgs/navbar-toggle'
import ScissorsIcon from '../components/svgs/scissors'

let menuList: string[];
menuList = ['about', 'services', 'shop', 'schedule'];

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between bg-black h-20">
        <div className="flex text-white items-center ml-5">
          <p>Trek</p><ScissorsIcon /><p>uts</p>
        </div>
        <div className="flex items-center mr-5">
          <NavbarToggle />
        </div>
      </div>
      <div className="bg-black xl:hidden">
        <ul className="flex flex-col items-center text-white">
          {
            menuList.map((listItem, index) => {
              return (
                <li key={index} className="mx-2 mt-2 mb-5 text-3xl">{listItem}</li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar