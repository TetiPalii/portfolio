import { useTranslations } from "next-intl"
import { ProjectItem } from "./ProjectItem"
import { nanoid } from "nanoid";
import { usePathname } from "next/navigation";
import { projects } from '@/data/projects';

export const ProjectsList = () => {
    
   
    const t = useTranslations("Projects");
   
    return <ul className="flex flex-col gap-4 max-w-[815px] mx-auto">
        {projects.map((projectItem) => <li key={nanoid(4)} className="hover:border-0 py-2 border transition border-[#4d4b4b] rounded-3xl shadow-lg flex flex-col items-center gap-4"><ProjectItem  projectItem={projectItem} open={t("open")} /></li>)}
    </ul>
}


 