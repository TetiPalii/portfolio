import {useTranslations} from 'next-intl';
import { Skills } from '@/components/Skills/Skills';
import { Projects } from '@/components/Projects/Projects';
export default function IndexPage() {
  const t = useTranslations('IndexPage');
  return <div><h1 className='text-center'>{t('name')}</h1>
    <p className='text-center'>{t('description')}</p>
    <Skills />
    <Projects />
  </div>

}