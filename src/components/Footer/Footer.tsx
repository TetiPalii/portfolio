import { useTranslations } from "next-intl"
import Link from "next/link"

export const Footer = () => {
    const t=useTranslations("Footer")
    return <footer>
        <p className="text-center">
            {t("copyright")}
        </p>
        <nav className="">
        <ul className="flex flex-col md:flex-row justify-between">
            <li><Link href={"https://t.me/TetianaPalii"}>telegram</Link></li>
            <li><Link href={"https://linkedin.com/in/tetiana-palii"}>LinkedIn</Link></li>
                <li><Link href={"https://github.com/TetiPalii"}>GitHub</Link></li>
                <li><Link href={"mailto:tpalii1945@gmail.com"}>Email</Link></li>
        </ul>
        </nav>
       
    </footer>
}