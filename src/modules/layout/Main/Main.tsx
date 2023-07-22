import React from 'react';

import { Footer, Header } from '@/components/layout';
import { CookiesConsent } from '@/components/seo/CookiesConsent';

import styles from './Main.module.css';

interface MainProps {
  children?: any;
}

export const Main = ({ children }: MainProps) => (
  <div className={styles.container}>
    <Header />
    <main>{children}</main>
    <Footer />
    <CookiesConsent />
  </div>
);

Main.defaultProps = {
  children: <div />,
};
