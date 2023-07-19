import React from 'react';

import styles from './PageLayout.module.css';

interface PageLayoutProps {
  children: any;
}

export const PageLayout = ({ children }: PageLayoutProps) => <div className={styles.container}>{children}</div>;
