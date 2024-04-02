import { useTranslations } from 'next-intl'
import { Navigation } from '../Navigation/Navigation'

export const Header = () => {
    const t = useTranslations("Navigation")
    return <header className="w-full px-4 py-8">
        <Navigation skills={t("skills")} projects={t("projects")} contact={t("contact")} />
    </header>
}