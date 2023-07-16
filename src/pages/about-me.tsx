import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { AboutMe, WorkExperience } from '@/modules/about';
import { Head } from '@/modules/layout';

const Home = () => {
  const { t } = useTranslation('about');
  const PAGE_TITLE = t('title');

  return (
    <>
      <Head title={PAGE_TITLE} />
      <AboutMe />
      <WorkExperience />
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'contact', 'about'])),
    },
  };
}

export default Home;
