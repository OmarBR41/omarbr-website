import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { ErrorLayout } from '@/modules/layout';

const Custom500 = () => {
  const { t } = useTranslation('common');
  return <ErrorLayout text={t('errors.500.message')} title={t('errors.500.title')} />;
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Custom500;
