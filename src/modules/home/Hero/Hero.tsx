import React from 'react';

import { useTranslation } from 'next-i18next';

import { ShootingStars, SkillsIcons } from '@/components/home';
import { Button, ButtonVariant } from '@/components/ui/Button';

import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  const { t } = useTranslation('home');

  return (
    <div className={styles.wrapper}>
      <div className={styles.background} />

      <ShootingStars />

      <div className={styles.container}>
        <h1 className={styles.title}>{t('hero.title')}</h1>
        <p className={styles.text}>{t('hero.text')}</p>

        <div className={styles.ctaContainer}>
          <Button href="/contact-me" variant={ButtonVariant.primary}>
            {t('hero.cta-primary')}
          </Button>
          <Button href="/projects" variant={ButtonVariant.secondary}>
            {t('hero.cta-secondary')}
          </Button>
        </div>

        <SkillsIcons />
      </div>
    </div>
  );
};
