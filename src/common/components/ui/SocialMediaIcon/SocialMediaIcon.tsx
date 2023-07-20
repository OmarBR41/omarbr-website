import React from 'react';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './SocialMediaIcon.module.css';

interface SocialMediaIconProps {
  id: string;
  icon: IconProp;
  url: string;
  onClick?: () => unknown;
}

export const SocialMediaIcon = ({ id, icon, url, onClick }: SocialMediaIconProps) => (
  <a className={styles.icon} href={url} key={id} target="_blank" onClick={onClick}>
    <FontAwesomeIcon icon={icon} />
  </a>
);
