import React, { useCallback } from 'react';

// eslint-disable-next-line camelcase
import { Akaya_Kanadaka } from 'next/font/google';
import Link from 'next/link';

import classNames from 'classnames';

import { event, type EventCategory } from '@/config/analytics';

import styles from './Logo.module.css';

const akayaFont = Akaya_Kanadaka({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
});

interface LogoProps {
  eventCategory?: EventCategory;
}

const Logo = ({ eventCategory }: LogoProps) => {
  const onClick = useCallback(() => {
    if (!eventCategory) {
      return;
    }

    event({
      action: 'Clicked Logo',
      category: eventCategory,
    });
  }, [eventCategory]);

  return (
    <Link className={classNames(styles.logo, akayaFont.className)} href="/" onClick={onClick}>
      OBR
    </Link>
  );
};

export { Logo };
