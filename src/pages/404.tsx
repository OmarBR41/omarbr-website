import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { ErrorLayout } from '@/modules/layout';

const Custom404 = () => {
  const { t } = useTranslation('common');
  return <ErrorLayout text={t('errors.404.message')} title={t('errors.404.title')} />;
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Custom404;
