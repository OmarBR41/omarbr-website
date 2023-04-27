import React from 'react';

import styles from './ErrorLayout.module.css';

interface ErrorProps {
  title: string;
  text: string;
}

export const ErrorLayout = ({ title, text }: ErrorProps) => (
  <div className={styles.container}>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.text}>{text}</p>
  </div>
);
