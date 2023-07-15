import React from 'react';

import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './SocialMediaIcon.module.css';

interface SocialMediaIconProps {
  id: string;
  icon: IconDefinition;
  url: string;
}

export const SocialMediaIcon = ({ id, icon, url }: SocialMediaIconProps) => (
  <a className={styles.icon} href={url} key={id} target="_blank">
    <FontAwesomeIcon icon={icon} />
  </a>
);
