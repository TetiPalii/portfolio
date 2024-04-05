import { useTranslations } from "next-intl";
import { mySkills } from "@/data/skills";
import { SkillsList } from "./SkillsList";


export const Skills = () => {
    const t = useTranslations("Navigation")
    return <section className="px-4 pt-16 font-serif ">
        <h2 className="text-4xl text-center mb-10 leading-3 font-bold font-serif">{t('skills')}</h2>
        <SkillsList mySkills={mySkills } />
    </section>
}