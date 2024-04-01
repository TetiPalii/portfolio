import { useTranslations } from "next-intl";
import {ProjectsList} from "./ProjectsList"
// import { projects } from '@/data/projects'




export const Projects = () => {
 
    
    const t = useTranslations("Navigation")
    return <section className="px-4 pt-8">
        <h2 className="text-xl">{t('projects')}</h2>
        <ProjectsList />
    </section>
}