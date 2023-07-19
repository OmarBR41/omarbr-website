import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { type Project } from '@/lib/constants/projects';
import { InDevelopment } from '@/components/ui/InDevelopment';

import { StackBadges } from '../StackBadges';
import { ProjectIcons } from '../ProjectIcons';

import styles from './ProjectCard.module.css';

interface ProjectCardProps extends Project {
  title: string;
  description: string;
}

const ProjectCard = ({ id, url, title, description, stack, repoUrl, isInDevelopment }: ProjectCardProps) => {
  const projectUrl = `/projects/${id}`;

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <Link href={projectUrl}>
          <div className={styles.imageContainer}>
            <Image
              alt={title}
              fill
              src={`/projects/${id}/thumbnail.png`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {isInDevelopment && <InDevelopment />}
          </div>

          <div className={styles.contentContainer}>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
          </div>
        </Link>
      </div>

      <div className={styles.stackContainer}>
        <StackBadges id={id} stack={stack} />
      </div>

      <div className={styles.bottomContainer}>
        <ProjectIcons id={id} url={url} repoUrl={repoUrl} internalUrl={projectUrl} />
      </div>
    </div>
  );
};

export { ProjectCard };
