import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { ErrorLayout, Head } from '@/modules/layout';

const Custom404 = () => {
  const { t } = useTranslation('common');
  const PAGE_TITLE = t('errors.404.title');

  return (
    <>
      <Head title={PAGE_TITLE} />
      <ErrorLayout text={t('errors.404.message')} title={t('errors.404.title')} />
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Custom404;
