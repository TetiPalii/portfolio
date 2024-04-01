import { useTranslations } from 'next-intl';
import { Skills } from '@/components/Skills/Skills';
import { Projects } from '@/components/Projects/Projects';
import { About } from '@/components/About/About';
export default function IndexPage() {
  const t = useTranslations('IndexPage');
  return <div >
    <About />
    <Skills />
    <Projects />
  </div>

}