import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { ContactSection } from '@/modules/contact';
import { About, Hero } from '@/modules/home';
import { Head } from '@/modules/layout';

const Home = () => {
  const { t } = useTranslation('home');
  const PAGE_TITLE = t('title');

  return (
    <>
      <Head title={PAGE_TITLE} />
      <Hero />
      <About />
      <ContactSection />
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'contact', 'home'])),
    },
  };
}

export default Home;
