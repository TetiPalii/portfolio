'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { Icon } from '@/components/Icon/Icon';

export const ProjectItem = ({ projectItem: { name, description, github, project, img1, alt },open }) => {
    // const t = useTranslations("Projects")
    
   const [isClicked, setIsClicked]=useState(false)
    return <li >
        <h3 onClick={()=>setIsClicked(!isClicked)}>{name}</h3>
       { isClicked && <div><p>{description}</p>
            <Image src={img1} width={200} height={250} alt={alt} />
            <Link href={project}>{open}</Link>
            <Link href={github}><Icon iconName={ 'github'} /></Link>
        </div>
        }
        
    </li>
}