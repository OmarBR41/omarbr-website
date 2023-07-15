import React from 'react';

import Link from 'next/link';

import { faCircleQuestion, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SocialMediaIcon } from '@/common/components/ui/SocialMediaIcon';

import styles from './ProjectIcons.module.css';

interface ProjectIconsProps {
  id: string;
  url?: string;
  repoUrl?: string;
  internalUrl?: string;
}

const ProjectIcons = ({ id, url, repoUrl, internalUrl }: ProjectIconsProps) => {
  return (
    <div className={styles.icons}>
      {internalUrl && (
        <Link href={internalUrl}>
          <FontAwesomeIcon icon={faCircleQuestion} />
        </Link>
      )}

      {url && <SocialMediaIcon icon={faGlobe} id={id} url={url} />}
      {repoUrl && <SocialMediaIcon icon={faGithub} id={id} url={repoUrl} />}
    </div>
  );
};

ProjectIcons.defaultProps = {
  url: undefined,
  repoUrl: undefined,
  internalUrl: undefined,
};

export { ProjectIcons };
