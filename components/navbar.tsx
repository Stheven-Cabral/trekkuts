import * as React from 'react'
import NavbarToggle from '../components/svgs/navbar-toggle'
import ScissorsIcon from '../components/svgs/scissors'
import Link from 'next/link'
import { useRouter } from 'next/router'

let menuList: string[];
menuList = ['about', 'services', 'shop', 'schedule'];

type NavListProps = {
  menuClassNames: string;
  menuItemClassNames: string;
}

type NavLinkProps = {
  href: string;
  listItem: string;
  menuItemClassNames: string;
}

const NavLink = ({ href, listItem, menuItemClassNames }: NavLinkProps) => {
  const router = useRouter();
  console.log(router);
  console.log(href)

  return (
    <Link href={`/${listItem}`}>
      <p className={`${menuItemClassNames} font-head text-3xl ${router.pathname === href ? 'text-yellow-400' : 'text-white'}`}>{listItem}</p>
    </Link>
  )
}

const NavList = ({ menuClassNames, menuItemClassNames }: NavListProps) => {
  return (
    <div className={`${menuClassNames} flex items-center`}>
      {
        menuList.map((listItem, index) => {
          return (
            <NavLink key={index} href={`/${listItem}`} menuItemClassNames={menuItemClassNames} listItem={listItem} />
          )
        })
      }
    </div>
  )
}

const Navbar = (props) => {
  console.log(props);
  const [collapsed, setCollapse] = React.useState(false);

  const toggleClick = () => {
    setCollapse(!collapsed);
  }

  return (
    <div className="fixed w-full">
      <div className="flex justify-between bg-black h-24">
        <div className="flex text-white items-center ml-5 font-head text-4xl xl:text-5xl">
          <p className="mr-1">Trek</p><ScissorsIcon /><p>uts</p>
        </div>
        <div className="flex items-center mr-5">
          <NavList menuClassNames="hidden xl:flex flex-row" menuItemClassNames="mx-3" />
          <NavbarToggle onClick={() => toggleClick()} className="xl:hidden" />
        </div>
      </div>
      <div className={`bg-black xl:hidden ${collapsed ? 'block' : 'hidden'}`}>
        <NavList menuClassNames="flex-col py-4" menuItemClassNames="mx-2 my-5" />
      </div>
    </div>
  )
}

export default Navbar