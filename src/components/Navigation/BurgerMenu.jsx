import Link from "next/link"
import { Icon } from "../Icon/Icon"

export const BurgerMenu = ({ setOpenMenu, skills, projects, contact }) => {
    return <nav className="bg-black fixed top-0 left-0 w-screen h-screen">
        <div className="w-full px-4 py-8">
            <button type="button" onClick={() => setOpenMenu(false)} className="mb-20"><Icon iconName={'cancel-circle'} /></button>
            <ul className="flex flex-col  text-2xl gap-6 items-center ">
                <li className="hover:text-red-900 transition-colors hover:border-0 border border-[#4d4b4b] rounded-3xl px-8 py-2 shadow-lg font-semibold"> <Link href={'#contact'} onClick={() => setOpenMenu(false)}>{contact}</Link></li>
                <li className="hover:text-red-900 transition-colors hover:border-0 border border-[#4d4b4b] rounded-3xl px-8 py-2 shadow-lg font-semibold"> <Link href={'#skills'} onClick={() => setOpenMenu(false)}>{skills}</Link></li>
                <li className="hover:text-red-900 transition-colors hover:border-0 border border-[#4d4b4b] rounded-3xl px-8 py-2 shadow-lg font-semibold"> <Link href={'#projects'} onClick={() => setOpenMenu(false)}>{projects}</Link></li>
            </ul>
        </div>
    </nav>
}