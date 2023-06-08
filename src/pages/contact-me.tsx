import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { ContactSection, SocialMedia } from '@/modules/contact';
import { Head } from '@/modules/layout';

const ContactMe = () => {
  const { t } = useTranslation('contact');
  const PAGE_TITLE = t('title');

  return (
    <>
      <Head title={PAGE_TITLE} />
      <ContactSection />
      <SocialMedia />
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'contact'])),
    },
  };
}

export default ContactMe;
