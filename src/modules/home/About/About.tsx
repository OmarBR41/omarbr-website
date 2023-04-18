import React from 'react';

import styles from './About.module.css';

export const About: React.FC = () => (
  <div className={styles.container}>
    <span className={styles.anchor} id="about" />
    <div className={styles.textContainer}>
      <h1 className={styles.headline}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p className={styles.smallText}>*Lorem ipsum dolor sit amet.</p>
    </div>
  </div>
);
