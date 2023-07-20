import { useEffect } from 'react';

import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { event } from '@/config/analytics';
import { ErrorLayout, Head } from '@/modules/layout';

const Custom500 = () => {
  const { asPath } = useRouter();
  const { t } = useTranslation('common');
  const PAGE_TITLE = t('errors.500.title');

  useEffect(() => {
    event({
      action: 'Error',
      category: 'Errors - 500',
      label: asPath,
    });
  }, []);

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
