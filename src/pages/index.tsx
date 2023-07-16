import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { AboutMe } from '@/modules/about';
import { ContactSection } from '@/modules/contact';
import { Hero } from '@/modules/home';
import { Head } from '@/modules/layout';
import { ProjectsSection } from '@/modules/projects';

const Home = () => {
  const { t } = useTranslation('home');
  const PAGE_TITLE = t('title');

  return (
    <>
      <Head title={PAGE_TITLE} />
      <Hero />
      <AboutMe shouldShowWorkExperienceLink />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'contact', 'projects', 'about', 'home'])),
    },
  };
}

export default Home;
