import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { ErrorLayout, Head } from '@/modules/layout';

const Custom500 = () => {
  const { t } = useTranslation('common');
  const PAGE_TITLE = t('errors.500.title');
  return (
    <>
      <Head title={PAGE_TITLE} />
      <ErrorLayout text={t('errors.500.message')} title={t('errors.500.title')} />
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

export default Custom500;
