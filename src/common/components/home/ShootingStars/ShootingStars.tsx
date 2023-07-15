import React from 'react';

import { Star } from './Star';

import styles from './ShootingStars.module.css';

const NUM_OF_STARS = 8;

export const ShootingStars = () => {
  const renderStars = () => Array.from(Array(NUM_OF_STARS).keys()).map((e: number) => <Star key={`star-${e}`} />);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>{renderStars()}</div>
    </div>
  );
};
