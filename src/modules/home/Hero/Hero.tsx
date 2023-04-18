import React from 'react';

import styles from './Hero.module.css';

export const Hero: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.headline}>Lorem ipsum dolor sit.</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
      </p>
    </div>
  </div>
);
