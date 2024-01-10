import React from 'react';

import styles from './StackBadges.module.css';

export type Badge =
  | 'html5'
  | 'css3'
  | 'javascript'
  | 'typescript'
  | 'react'
  | 'redux'
  | 'nextjs'
  | 'nodejs'
  | 'expressjs'
  | 'mui'
  | 'tailwindcss'
  | 'postgresql'
  | 'mongodb'
  | 'graphql'
  | 'docker'
  | 'netlify'
  | 'digital-ocean';

interface StackBadgesProps {
  id: string;
  stack: Badge[];
}

const StackBadges = ({ id, stack }: StackBadgesProps) => {
  return (
    <div className={styles.container}>
      {stack.map((name) => (
        <div key={`${id}-${name}`} className={styles.badgeContainer}>
          <img className={styles.badgeImage} src={`/badges/${name}.svg`} alt={`${name} badge`} />
        </div>
      ))}
    </div>
  );
};

export { StackBadges };
