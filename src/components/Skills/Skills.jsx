import { useTranslations } from "next-intl"

export const Skills = () => {
    const t = useTranslations("Navigation")
    return <section>
    <p>{t('skills')}</p>
    </section>
}