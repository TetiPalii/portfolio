'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { Icon } from '@/components/Icon/Icon';
import { usePathname } from "next/navigation";

export const ProjectItem = ({projectItem:{name, description, img1, alt, github, project, open}}) => {
    const pathName = usePathname();
 
    const projectName = name.filter((el) => el.lang === pathName);
    const projectDescription = description.filter((el) => el.lang === pathName);
 
    
   const [isClicked, setIsClicked]=useState(false)
    return <li >
        <h3 onClick={()=>setIsClicked(!isClicked)}>{projectName[0].value}</h3>
       { isClicked && <div><p>{projectDescription[0].value}</p>
            {/* <Image src={img1} width={200} height={250} alt={alt} /> */}
            <Link href={project}>{open}</Link>
            <Link href={github}>
                <Icon iconName={'github'} />
            </Link>
        </div>
        }
        
    </li>
}