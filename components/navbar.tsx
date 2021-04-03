import * as React from 'react'
import NavbarToggle from '../components/svgs/navbar-toggle'
import ScissorsIcon from '../components/svgs/scissors'

let menuList: string[];
menuList = ['about', 'services', 'shop', 'schedule'];

const Navbar = () => {
  const [collapsed, setCollapse] = React.useState(false);

  const toggleClick = () => { }

  return (
    <div className="fixed w-full">
      <div className="flex justify-between bg-black h-24">
        <div className="flex text-white items-center ml-5 font-head text-4xl xl:text-5xl">
          <p className="mr-1">Trek</p><ScissorsIcon /><p>uts</p>
        </div>
        <div className="flex items-center mr-5">
          <NavbarToggle onClick={() => setCollapse(!collapsed)} />
        </div>
      </div>
      <div className={`bg-black xl:hidden ${collapsed ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center text-white py-4">
          {
            menuList.map((listItem, index) => {
              return (
                <li key={index} className="mx-2 my-5 text-3xl font-head">{listItem}</li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar