import { useTranslations } from "next-intl";
import {ProjectsList} from "./ProjectsList"
// import { projects } from '@/data/projects'




export const Projects = () => {
 
    
    const t = useTranslations("Navigation")
    return <section className="px-4 pt-16">
        <h2 className="text-4xl text-center mb-10 leading-3 font-bold font-serif">{t('projects')}</h2>
        <ProjectsList />
    </section>
}