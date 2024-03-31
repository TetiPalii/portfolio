import { useTranslations } from "next-intl"
import Link from "next/link"

export const Navigation = () => {
    const t= useTranslations("Navigation")
    return <nav className="flex flex-col md:flex-row justify-between">
        <Link href={'/'}>{t("contact")}</Link>
        <Link href={'/'}>{t("skills")}</Link>
        <Link href={'/'}>{t("projects")}</Link>
    </nav>
}