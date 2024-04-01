import { useTranslations } from "next-intl";
import { mySkills } from "@/data/skills";
import { SkillsList } from "./SkillsList";


export const Skills = () => {
    const t = useTranslations("Navigation")
    return <section className="px-4 pt-8">
        <h2 className="text-2xl text-center">{t('skills')}</h2>
        <SkillsList mySkills={mySkills } />
    </section>
}