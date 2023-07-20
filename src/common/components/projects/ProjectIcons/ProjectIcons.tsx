import React from 'react';

import Link from 'next/link';

import { faCircleQuestion, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SocialMediaIcon } from '@/components/ui/SocialMediaIcon';
import { event } from '@/config/analytics';

import styles from './ProjectIcons.module.css';
import { useRouter } from 'next/router';

interface ProjectIconsProps {
  id: string;
  url?: string;
  repoUrl?: string;
  internalUrl?: string;
}

const ProjectIcons = ({ id, url, repoUrl, internalUrl }: ProjectIconsProps) => {
  const { route, query } = useRouter();

  const onIconClick = (iconId: string) => {
    const category = (() => {
      switch (route) {
        case '/':
          return 'Home - Projects';
        case '/projects':
          return 'Projects Index';
        case '/projects/[id]':
          if (query.id === id) {
            return 'Project Details';
          }
          return 'Other Projects';
        default:
          return null;
      }
    })();

    if (!category) {
      return;
    }

    event({
      action: 'Clicked Project Icon',
      category,
      label: `${id} > ${iconId}`,
    });
  };

  return (
    <div className={styles.icons}>
      {internalUrl && (
        <Link href={internalUrl} onClick={() => onIconClick('internalUrl')}>
          <FontAwesomeIcon icon={faCircleQuestion} />
        </Link>
      )}

      {url && <SocialMediaIcon icon={faGlobe} id={id} url={url} onClick={() => onIconClick('url')} />}
      {repoUrl && <SocialMediaIcon icon={faGithub} id={id} url={repoUrl} onClick={() => onIconClick('github')} />}
    </div>
  );
};

ProjectIcons.defaultProps = {
  url: undefined,
  repoUrl: undefined,
  internalUrl: undefined,
};

export { ProjectIcons };
