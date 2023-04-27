import React from 'react';

import { useTranslation } from 'next-i18next';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  const { t } = useTranslation('home');

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{t('hero.title')}</h1>
        <p className={styles.text}>{t('hero.text')}</p>

      </div>
    </div>
  );
};
