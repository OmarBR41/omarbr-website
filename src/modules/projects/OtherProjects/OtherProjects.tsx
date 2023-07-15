import React, { useCallback } from 'react';

import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ProjectsList } from '@/components/projects/ProjectsList';
import { Title } from '@/components/ui';
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

      <Link href="/projects" className={styles.moreProjectsLink}>
        {t('more-projects')}
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </section>
  );
};

export { OtherProjects };
