import React from 'react';

// eslint-disable-next-line camelcase
import { Akaya_Kanadaka } from 'next/font/google';
import Link from 'next/link';

import classNames from 'classnames';

import styles from './Logo.module.css';

const akayaFont = Akaya_Kanadaka({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
});

const Logo = () => (
  <Link className={classNames(styles.logo, akayaFont.className)} href="/">
    OBR
  </Link>
);

export { Logo };
