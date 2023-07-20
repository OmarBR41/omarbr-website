import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { type Project } from '@/lib/constants/projects';
import { InDevelopment } from '@/components/ui/InDevelopment';
import { event } from '@/common/config/analytics';

import { StackBadges } from '../StackBadges';
import { ProjectIcons } from '../ProjectIcons';

import styles from './ProjectCard.module.css';

interface ProjectCardProps extends Project {
  title: string;
  description: string;
}

const ProjectCard = ({ id, url, title, description, stack, repoUrl, isInDevelopment }: ProjectCardProps) => {
  const { route } = useRouter();

  const projectUrl = `/projects/${id}`;

  const onClick = () => {
    const category = (() => {
      switch (route) {
        case '/':
          return 'Home - Projects';
        case '/projects':
          return 'Projects Index';
        case '/projects/[id]':
          return 'Other Projects';
        default:
          return null;
      }
    })();

    if (!category) {
      return;
    }

    event({
      action: 'Clicked Project Card',
      category,
      label: id,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <Link href={projectUrl} onClick={onClick}>
          <div className={styles.imageContainer}>
            <Image alt={title} fill src={`/projects/${id}/thumbnail.png`} unoptimized />

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
