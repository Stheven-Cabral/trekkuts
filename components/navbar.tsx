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
  toggleClick?: () => void;
}

type NavLinkProps = {
  href: string;
  listItem: string;
  menuItemClassNames: string;
  toggleClick?: () => void;
}

const NavLink = ({ href, listItem, menuItemClassNames, toggleClick }: NavLinkProps) => {
  const router = useRouter();
  return (
    <Link href={`/${listItem}`}>
      <p onClick={() => toggleClick()} className={`${menuItemClassNames} font-head text-3xl ${router.pathname === href ? 'text-yellow-400' : 'text-white'}`}>{listItem}</p>
    </Link>
  )
}

const NavList = ({ menuClassNames, menuItemClassNames, toggleClick }: NavListProps) => {
  return (
    <div className={`${menuClassNames} flex items-center`}>
      {
        menuList.map((listItem, index) => {
          return (
            <NavLink
              key={index}
              href={`/${listItem}`}
              menuItemClassNames={menuItemClassNames}
              listItem={listItem}
              toggleClick={toggleClick} />
          )
        })
      }
    </div>
  )
}

const Navbar = (props: any) => {
  const [collapsed, setCollapse] = React.useState(false);

  const navbarCollapsedContainer: React.Ref<HTMLDivElement> = React.useRef();
  const toggleContainer: React.Ref<HTMLDivElement> = React.useRef();

  const toggleClick = () => {
    setCollapse(!collapsed);
  }

  const handleClickOutside = (e: { target: any }) => {

    if (toggleContainer.current.contains(e.target)) {
      toggleClick();
    } else if (navbarCollapsedContainer.current && !navbarCollapsedContainer.current.contains(e.target)) {
      setCollapse(false);
    }
  }

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  });

  return (
    <div className="fixed w-full">
      <div className="flex justify-between bg-black h-24 relative z-10">
        <Link href="/">
          <div className="flex text-white items-center ml-5 font-head text-4xl xl:text-5xl">
            <p className="mr-1">Trek</p><ScissorsIcon /><p>uts</p>
          </div>
        </Link>
        <div className="flex items-center mr-5">
          <NavList menuClassNames="hidden xl:flex flex-row" menuItemClassNames="mx-3" />
          <div ref={toggleContainer}>
            <NavbarToggle className="xl:hidden" />
          </div>
        </div>
      </div>
      <div ref={navbarCollapsedContainer} className={`bg-black xl:hidden z-0 transform transition-all ${collapsed ? '' : '-translate-y-full'}`}>
        <NavList menuClassNames="flex-col py-4" menuItemClassNames="mx-2 my-5" toggleClick={toggleClick} />
      </div>
    </div>
  )
}

export default Navbar