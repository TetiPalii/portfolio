

import { useTranslations } from "next-intl"
import { ProjectItem } from "./ProjectItem"
import { nanoid } from "nanoid";
import { usePathname } from "next/navigation";
import { projects } from '@/data/projects';

export const ProjectsList = () => {
    
   
    const t = useTranslations("Projects");
   
    return <ul className="flex flex-col gap-4 max-w-[815px] mx-auto">
        {projects.map((projectItem) => <li key={nanoid(4)}className="hover:border-0 py-2 border border-[#4d4b4b] rounded-3xl shadow-lg flex flex-col items-center gap-4"><ProjectItem  projectItem={projectItem} open={t("open")} /></li>)}
    </ul>
}


 // const projects = [
    //     {
    //         name: `${t("movies.projectName")}`,
    //         description: `${t("movies.description")}`,
    //         github: "https://github.com/TetiPalii/goit-react-hw-05-movies",
    //         project: "https://tetipalii.github.io/goit-react-hw-05-movies/",
    //         alt:"the list of movies",
    //         img1: "/movies.jpg",
    //         img2: ""
    //     }, {
    //         name: `${t("phonebook.projectName")}`,
    //         description: `${t("phonebook.description")}`,
    //         github: "https://github.com/TetiPalii/phonebook-react-app",
    //         project: "https://tetipalii.github.io/phonebook-react-app/",
    //         alt:"a phonebpok with some saved contacts",
    //         img1: "/phonebook.jpg",
    //         img2: "" 
    //     }, {
    //         name: `${t("goosetrack.projectName")}`,
    //         description: `${t("goosetrack.description")}`,
    //         github: "https://github.com/yevgeniy8/GooseTrack",
    //         project: "https://yevgeniy8.github.io/GooseTrack/",
    //         alt:"the list of movies",
    //         img1: "/goosetrack.jpg",
    //         img2: ""
    //     }
    // ]