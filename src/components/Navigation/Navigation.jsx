'use client'
import Link from "next/link";
import { Icon } from "../Icon/Icon";
import {BurgerMenu} from './BurgerMenu'
import { useState } from "react";

export const Navigation = ({skills, projects, contact}) => {
    const [openMenu, setOpenMenu] = useState(false);
    function onClick() {
        setOpenMenu(!openMenu)
        
    }
    return <nav className="flex">
        <ul className="hidden md:flex md:gap-3 font-serif ">
            <li className="hover:text-red-900 transition-colors hover:border-0 border border-[#4d4b4b] rounded-3xl px-8 py-2 shadow-lg font-semibold"> <Link  href={'#contact'} >{contact}</Link></li>
            <li className="hover:text-red-900 transition-colors hover:border-0 border border-[#4d4b4b] rounded-3xl px-8 py-2 shadow-lg font-semibold"> <Link href={'#skills'}>{skills}</Link></li>
            <li className="hover:text-red-900 transition-colors hover:border-0  border border-[#4d4b4b] rounded-3xl px-8 py-2 shadow-lg font-semibold"><Link href={'#projects'}>{projects}</Link></li>
        </ul>
        <button className="md:hidden s bg-none border-none" type="button" onClick={onClick}><Icon iconName={'menu'} /></button> 
        {openMenu && <BurgerMenu setOpenMenu={setOpenMenu} skills={skills} projects={projects} contact={contact} />}
    </nav>
}