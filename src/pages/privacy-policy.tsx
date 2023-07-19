import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { TranslatedContent } from '@/components/ui/TranslatedContent';
import { PageLayout, Head } from '@/modules/layout';

const Privacy = () => {
  const { t } = useTranslation('privacy');
  const PAGE_TITLE = t('title');

  return (
    <>
      <Head title={PAGE_TITLE} />
      <PageLayout>
        <TranslatedContent t={t} i18nKey="content" />
      </PageLayout>
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'privacy'])),
    },
  };
}

export default Privacy;
