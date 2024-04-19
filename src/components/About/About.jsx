import { useTranslations } from "next-intl";

export const About = () => {
    const t = useTranslations('IndexPage');

    return <section className="px-4 pt-16 font-serif  " >
        <div className="flex flex-col items-center mx-auto p-8 border  border-[#4d4b4b] rounded-3xl shadow-lg max-w-[760px]">
            <h1 className='text-center text-white text-4xl mb-10 font-bold '>{t('name')}</h1>
            <p className='text-center text-white text-2xl'>{t('description')}</p>
        </div>
       
    </section>
}