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
        <ul className="hidden md:flex md:gap-3">
            <li className="border border-[#EAE8E8]"> <Link href={'/'}>{contact}</Link></li>
            <li> <Link href={'/'}>{skills}</Link></li>
            <li><Link href={'/'}>{projects}</Link></li>
        </ul>
        <button className="md:hidden s bg-none border-none" type="button" onClick={onClick}><Icon iconName={'menu'} /></button> 
        {openMenu && <BurgerMenu setOpenMenu={setOpenMenu} skills={skills} projects={projects} contact={contact} />}
    </nav>
}