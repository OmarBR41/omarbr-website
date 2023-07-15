import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { ContactSection } from '@/modules/contact';
import { About, Hero } from '@/modules/home';
import { Head } from '@/modules/layout';
import { ProjectsSection } from '@/modules/projects';

const Home = () => {
  const { t } = useTranslation('home');
  const PAGE_TITLE = t('title');

  return (
    <>
      <Head title={PAGE_TITLE} />
      <Hero />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'contact', 'projects', 'home'])),
    },
  };
}

export default Home;
