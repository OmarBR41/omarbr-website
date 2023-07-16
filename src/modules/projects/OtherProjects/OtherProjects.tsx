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
      <div className={styles.wrapper}>
        <p className={styles.title}>{t('other-projects')}</p>
        <ProjectsList filterBy={excludeProjectById} qty={3} />
      </div>

      <LinkWithIcon href="/projects" text={t('more-projects')} icon={faArrowRight} />
    </section>
  );
};

export { OtherProjects };
