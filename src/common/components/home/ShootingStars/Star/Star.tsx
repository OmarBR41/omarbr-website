import React, { useEffect, useState } from 'react';

import { randomRange } from '@/lib/utils';

import styles from './Star.module.css';

const DEFAULT_STATE = {
  animationDelay: 8000,
  opacity: 0.8,
  posX: 50,
  posY: 50,
};

interface StarState {
  animationDelay: number;
  opacity: number;
  posX: number | string;
  posY: number | string;
}

export const Star = () => {
  const [state, setState] = useState<StarState>(DEFAULT_STATE);

  useEffect(() => {
    const animationDelay = Math.random() * 10000;

    const posY = `calc(${Math.random() * 50}% - ${Math.random() * 400 - 200}px)`;
    const posX = `calc(${Math.random() * 50}% - ${Math.random() * 300}px)`;
    const opacity = randomRange(0.4, 1);

    setState({
      animationDelay,
      opacity,
      posX,
      posY,
    });
  }, []);

  return (
    <div
      className={styles.container}
      style={{
        top: state.posY,
        left: state.posX,
        animationDelay: `${state.animationDelay}ms`,
        opacity: state.opacity,
      }}
    />
  );
};
