import React from 'react';

import { GetStaticPaths } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { ContactSection } from '@/modules/contact/ContactSection';
import { SocialMedia } from '@/modules/contact/SocialMedia';
import { Head } from '@/modules/layout/Head';
import { OtherProjects, ProjectDetails } from '@/modules/projects';

interface ProjectPageProps {
  id: string | undefined;
}

const ProjectPage = ({ id }: ProjectPageProps) => {
  const { t } = useTranslation('projects');
  const PAGE_TITLE = t('title');

  return (
    <>
      <Head title={PAGE_TITLE} />
      {id && (
        <>
          <ProjectDetails id={id} />
          <OtherProjects excludedId={id} />
          <ContactSection />
          <SocialMedia />
        </>
      )}
    </>
  );
};

type Params = {
  params: {
    id: string;
  };
  locale: string;
};

export const getStaticProps = async ({ params, locale }: Params) => ({
  props: {
    id: params?.id ?? null,
    ...(await serverSideTranslations(locale, ['common', 'contact', 'projects'])),
  },
});

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
});

export default ProjectPage;
