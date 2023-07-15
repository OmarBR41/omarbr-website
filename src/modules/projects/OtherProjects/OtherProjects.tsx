import React, { useCallback } from 'react';

import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { ProjectsList } from '@/components/projects/ProjectsList';
import { LinkWithIcon, Title } from '@/components/ui';
import { type Project } from '@/lib/constants/projects';

import styles from './OtherProjects.module.css';

interface OtherProjectsProps {
  excludedId: string;
}

const OtherProjects = ({ excludedId }: OtherProjectsProps) => {
  const { t } = useTranslation('projects');
  const excludeProjectById = useCallback(({ id }: Project) => id !== excludedId, [excludedId]);

  return (
    <section className={styles.container}>
      <Title>{t('other-projects')}</Title>
      <ProjectsList filterBy={excludeProjectById} qty={3} />

      <LinkWithIcon href="/projects" text={t('other-projects')} icon={faArrowRight} />
    </section>
  );
};

export { OtherProjects };
