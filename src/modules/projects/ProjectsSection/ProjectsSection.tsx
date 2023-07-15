import React from 'react';

import { useTranslation } from 'next-i18next';

import { Title } from '@/components/ui';

import { ProjectsList } from '@/components/projects/ProjectsList';

import styles from './ProjectsSection.module.css';

export const ProjectsSection = () => {
  const { t } = useTranslation('projects');

  return (
    <section className={styles.container}>
      <Title>{t('title')}</Title>
      <ProjectsList />
    </section>
  );
};
