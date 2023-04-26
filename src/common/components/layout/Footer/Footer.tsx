import React from 'react';

import { LanguageSwitcher } from '../LanguageSwitcher';

import styles from './Footer.module.css';

export const Footer: React.FC = () => (
  <footer className={styles.container}>
    <nav className={styles.nav}>
      <p>Footer1</p>
      <p>Footer2</p>
    </nav>
    <LanguageSwitcher />
  </footer>
);
