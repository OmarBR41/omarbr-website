import React from 'react';

import { Copyright, NavGroup } from '@/components/footer';
import { Logo } from '@/components/ui';

import { FOOTER_NAV_LEFT, FOOTER_NAV_RIGHT } from '@/lib/constants';

import styles from './Footer.module.css';

export const Footer: React.FC = () => (
  <footer className={styles.container}>
    <div className={styles.logoContainer}>
      <Logo />
    </div>

    <nav className={styles.nav}>
      <NavGroup items={FOOTER_NAV_LEFT} />
      <NavGroup items={FOOTER_NAV_RIGHT} />
    </nav>

    <Copyright />
  </footer>
);
