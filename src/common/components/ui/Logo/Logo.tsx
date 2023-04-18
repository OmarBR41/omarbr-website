import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import styles from './Logo.module.css';

const Logo = () => (
  <Link className={styles.logo} href="/">
    <Image alt="Logo" height={24} priority src="/favicon.ico" width={32} />
  </Link>
);

export { Logo };
