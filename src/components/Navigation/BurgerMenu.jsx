import Link from "next/link"
import { Icon } from "../Icon/Icon"

export const BurgerMenu = ({setOpenMenu,skills, projects, contact}) => {
    return <nav className="bg-black fixed top-0 left-0 w-screen h-screen">
        <div className="w-full px-4 py-8">
            <button type="button" onClick={() => setOpenMenu(false)}><Icon iconName={'cancel-circle'} /></button>
            <ul className="flex flex-col  text-2xl gap-6 items-center">
            <li > <Link href={'/'}>{contact}</Link></li>
            <li> <Link href={'/'}>{skills}</Link></li>
            <li><Link href={'/'}>{projects}</Link></li>
        </ul>
      </div>
    </nav>
}