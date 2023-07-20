import React from 'react';

import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './LinkWithIcon.module.css';

interface LinkWithIconProps {
  href: string;
  text: string;
  icon: any;
  onClick?: () => unknown;
}

const LinkWithIcon = ({ href, text, icon, onClick }: LinkWithIconProps) => {
  return (
    <Link href={href} className={styles.container} onClick={onClick}>
      {text}
      <FontAwesomeIcon icon={icon} />
    </Link>
  );
};

export { LinkWithIcon };
