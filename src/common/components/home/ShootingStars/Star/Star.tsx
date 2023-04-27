import React from 'react';

import styles from './Star.module.css';

export const Star = () => {
  const positionY = `calc(${Math.random() * 50}% - ${Math.random() * 400 - 200}px)`;
  const positionX = `calc(${Math.random() * 50}% - ${Math.random() * 300}px)`;
  const animationDelay = `${Math.random() * 10000}ms`;

  return (
    <div
      className={styles.container}
      style={{
        top: positionY,
        left: positionX,
        animationDelay,
      }}
    />
  );
};
