import React from 'react';

import styles from './Copyright.module.css';

const Copyright = () => {
  return (
    <div className={styles.container}>
      <p className={styles.icon}>&copy;</p>
      <p className={styles.text}>{new Date().getFullYear()} - Omar BR</p>
    </div>
  );
};

export { Copyright };
