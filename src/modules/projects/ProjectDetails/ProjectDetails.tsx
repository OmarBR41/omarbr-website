import React from 'react';

import { Trans, useTranslation } from 'next-i18next';

import { ComputerMonitor, MobilePhone, ProjectIcons, StackBadges } from '@/components/projects';

import { PROJECTS } from '@/lib/constants/projects';
import styles from './ProjectDetails.module.css';

interface ProjectDetailsProps {
  id: string;
}

export const ProjectDetails = ({ id }: ProjectDetailsProps) => {
  const { t: commonT } = useTranslation('common');
  const { t: projectsT } = useTranslation('projects');

  const project = PROJECTS.find((project) => project.id === id) ?? null;

  if (!project) {
    return null;
  }

  const { url, repoUrl, stack, isInDevelopment } = project;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{projectsT(`${id}.title`)}</h1>

      <div className={styles.wrapper}>
        <div className={styles.devices}>
          <div className={styles.monitorContainer}>
            <ComputerMonitor monitorImage={`/projects/${id}/monitor.png`} isInDevelopment={isInDevelopment} />
          </div>

          <div className={styles.phoneContainer}>
            <MobilePhone screenImage={`/projects/${id}/mobile.png`} isInDevelopment={isInDevelopment} />
          </div>
        </div>

        <div className={styles.content}>
          {/* Description */}
          <div className={styles.textContainer}>
            <p className={styles.header}>{commonT('misc.description')}</p>
            <p className={styles.text}>
              <Trans t={projectsT} i18nKey={`${id}.description`} />
            </p>
          </div>

          {/* Architecture */}
          <div className={styles.textContainer}>
            <p className={styles.header}>{commonT('misc.architecture')}</p>
            <p className={styles.text}>
              <Trans t={projectsT} i18nKey={`${id}.architecture`} />
            </p>
          </div>

          {/* Stack */}
          <div className={styles.textContainer}>
            <StackBadges id={id} stack={stack} />
          </div>

          {/* Open Source */}
          {repoUrl && (
            <div className={styles.textContainer}>
              <p className={styles.header}>{commonT('misc.open-source')}</p>
              <p className={styles.text}>{projectsT('open-source-project')}</p>
            </div>
          )}

          {/* Icons / Links */}
          <ProjectIcons id={id} url={url} repoUrl={repoUrl} />
        </div>
      </div>
    </div>
  );
};
