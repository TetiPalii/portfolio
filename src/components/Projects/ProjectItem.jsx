'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"; ``
import { Icon } from '@/components/Icon/Icon';
import { usePathname } from "next/navigation";

export const ProjectItem = ({ projectItem: { name, description, img1, alt, github, project }, open }) => {
    const [isClicked, setIsClicked] = useState(false)
    const pathName = usePathname();

    const projectName = name.filter((el) => el.lang === pathName);
    const projectDescription = description.filter((el) => el.lang === pathName);



    return <>
        <h3 onClick={() => setIsClicked(!isClicked)} className=" flex text-center font-semibold text-xl  cursor-pointer hover:text-red-900 focus:border-transparent transition-colors">{projectName[0].value}
            <Icon iconName={'arrow_drop_down'} />
        </h3>
        {isClicked && <div className="flex items-center ">
            <div className="flex flex-col gap-4 p-4 max-w-[300px]">
                <p className="text-start">{projectDescription[0].value}</p>
            <Link href={project} target="blank" className="text-white">{open}</Link>
            <Link href={github} target="blank">
                <Icon iconName={'github'} />
            </Link>
        </div>
            <div>
                <Image src={img1} width={200} height={250} alt={alt} />
            </div>
        </div>
        }

    </>
}