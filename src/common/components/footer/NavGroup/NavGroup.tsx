import React from 'react';

import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import styles from './NavGroup.module.css';

interface NavGroupProps {
  items: any[];
}

const NavGroup = ({ items }: NavGroupProps) => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.container}>
      {items.map(({ id, href }) => (
        <Link key={id} className={styles.link} href={href}>
          {t(`nav.${id}`)}
        </Link>
      ))}
    </div>
  );
};

export { NavGroup };
