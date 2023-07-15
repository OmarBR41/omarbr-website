import React from 'react';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { SocialMediaIcon } from '@/components/ui/SocialMediaIcon';

import styles from './SocialMedia.module.css';

const SOCIAL_MEDIAS = [
  {
    id: 'linkedin',
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/omarbr41',
  },
  {
    id: 'github',
    icon: faGithub,
    url: 'https://www.github.com/omarbr41',
  },
];

export const SocialMedia: React.FC = () => (
  <div className={styles.container}>
    {SOCIAL_MEDIAS.map(({ id, icon, url }) => (
      <SocialMediaIcon icon={icon} id={id} key={id} url={url} />
    ))}
  </div>
);
