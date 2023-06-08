import React from 'react';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './SocialMedia.module.css';

interface SocialMediaProps {
  id: string;
  icon: IconDefinition;
  url: string;
}

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

export const SocialMedia: React.FC = () => {
  const handleSocialMediaClick = (id: string, url: string) => {
    // TODO: add events
    console.log(id, url);
  };

  const renderSocialMediaIcon = ({ id, icon, url }: SocialMediaProps) => (
    <a className={styles.icon} href={url} key={id} onClick={() => handleSocialMediaClick(id, url)} target="_blank">
      <FontAwesomeIcon icon={icon} />
    </a>
  );

  return <div className={styles.container}>{SOCIAL_MEDIAS.map((data) => renderSocialMediaIcon(data))}</div>;
};
