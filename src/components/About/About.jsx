import { useTranslations } from "next-intl";

export const About = () => {
    const t = useTranslations('IndexPage');

    return <section className="px-4 pt-8" >
        <h1 className='text-center text-white text-2xl'>{t('name')}</h1>
        <p className='text-center text-white text-xl'>{t('description')}</p>
    </section>
}