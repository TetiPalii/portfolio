import { useTranslations } from "next-intl"

export const Projects = () => {
    const t = useTranslations("Navigation")
    return <section>
        <p>{t('projects')}</p>
    </section>
}