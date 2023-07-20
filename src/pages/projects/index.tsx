import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { ContactSection, SocialMedia } from '@/modules/contact';
import { Head } from '@/modules/layout';
import { ProjectsSection } from '@/modules/projects';

const ProjectsIndexPage = () => {
  const { t } = useTranslation('projects');
  const PAGE_TITLE = t('title');

  return (
    <>
      <Head title={PAGE_TITLE} />
      <ProjectsSection />
      <ContactSection eventCategory="Projects Index" />
      <SocialMedia />
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'contact', 'projects'])),
    },
  };
}

export default ProjectsIndexPage;
