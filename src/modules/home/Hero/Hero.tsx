import React from 'react';

import { useTranslation } from 'next-i18next';

import { ShootingStars, SkillsIcons } from '@/components/home';
import { Button } from '@/components/ui';

import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  const { t } = useTranslation('home');

  return (
    <div className={styles.container}>
      <ShootingStars />

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{t('hero.title')}</h1>
        <p className={styles.text}>{t('hero.text')}</p>

        <div className={styles.ctaContainer}>
          <Button href="/contact-me" type="primary">
            {t('hero.cta-primary')}
          </Button>
          <Button href="/projects" type="secondary">
            {t('hero.cta-secondary')}
          </Button>
        </div>

        <SkillsIcons />
      </div>
    </div>
  );
};
