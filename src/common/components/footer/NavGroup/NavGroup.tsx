import React from 'react';

import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { event } from '@/config/analytics';

import styles from './NavGroup.module.css';

interface NavLinkProps {
  id: string;
  href: string;
}

interface NavGroupProps {
  items: any[];
}

const NavGroup = ({ items }: NavGroupProps) => {
  const { t } = useTranslation('common');

  const onLinkClick = (href: string) => {
    event({
      action: 'Clicked Navigation Link',
      category: 'Footer',
      label: href,
    });
  };

  const renderNavLink = ({ id, href }: NavLinkProps) => {
    const content = t(`nav.${id}`);

    if (id === 'sitemap') {
      return (
        <a key={id} className={styles.link} href={href} onClick={() => onLinkClick(href)}>
          {content}
        </a>
      );
    }

    return (
      <Link key={id} className={styles.link} href={href} onClick={() => onLinkClick(href)}>
        {content}
      </Link>
    );
  };

  return <div className={styles.container}>{items.map((item) => renderNavLink(item))}</div>;
};

export { NavGroup };
