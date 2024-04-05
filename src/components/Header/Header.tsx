import { useTranslations } from 'next-intl'
import { Navigation } from '../Navigation/Navigation'
import { LocalSwitcher } from '../LocalSwitcher/LocalSwitcher'

export const Header = () => {
    const t = useTranslations("Navigation")
    return <header className=" w-full px-4 py-8 flex justify-between items-center border-b border-[#4d4b4b] roundeed-3xl shadow-lg">
        <Navigation skills={t("skills")} projects={t("projects")} contact={t("contact")} />
        <LocalSwitcher />
    </header>
}