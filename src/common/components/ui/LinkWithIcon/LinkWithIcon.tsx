import React from 'react';

import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './LinkWithIcon.module.css';

interface LinkWithIconProps {
  href: string;
  text: string;
  icon: any;
}

const LinkWithIcon = ({ href, text, icon }: LinkWithIconProps) => {
  return (
    <Link href={href} className={styles.container}>
      {text}
      <FontAwesomeIcon icon={icon} />
    </Link>
  );
};

export { LinkWithIcon };
