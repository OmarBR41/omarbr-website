import React from 'react';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './SocialMediaIcon.module.css';

interface SocialMediaIconProps {
  id: string;
  icon: IconProp;
  url: string;
}

export const SocialMediaIcon = ({ id, icon, url }: SocialMediaIconProps) => (
  <a className={styles.icon} href={url} key={id} target="_blank">
    <FontAwesomeIcon icon={icon} />
  </a>
);
