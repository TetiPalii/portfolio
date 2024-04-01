import { useTranslations } from "next-intl";
import Link from "next/link";
import { nanoid } from "nanoid";
import { icons } from "@/data/icons";

export const Footer = () => {
    const t = useTranslations("Footer")
    return <footer className="px-4 py-8">
        <nav className="mb-4">
            <ul className="flex justify-center gap-3">
                {icons.map(({ icon, href }) => { return <li key={nanoid(4)}><Link href={href}>{icon}</Link></li> })}
            </ul>
        </nav>
        <p className="text-center">
            {t("copyright")}
        </p>
    </footer>
}
