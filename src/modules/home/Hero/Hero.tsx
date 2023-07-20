import React from 'react';

import { useTranslation } from 'next-i18next';

import { ShootingStars, SkillsIcons } from '@/components/home';
import { Button, ButtonVariant } from '@/components/ui/Button';
import { Divider } from '@/components/ui/Divider';

import { event } from '@/config/analytics';

import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  const { t } = useTranslation('home');

  const onPrimaryCTAClick = () => {
    event({
      action: 'Clicked Contact CTA',
      category: 'Home - Hero',
    });
  };

  const onSecondaryCTAClick = () => {
    event({
      action: 'Clicked Projects CTA',
      category: 'Home - Hero',
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.background} />

      <ShootingStars />

      <div className={styles.container}>
        <h1 className={styles.title}>{t('hero.title')}</h1>

        <Divider />

        <h2 className={styles.text}>{t('hero.text')}</h2>

        <div className={styles.ctaContainer}>
          <Button href="/contact-me" variant={ButtonVariant.primary} onClick={onPrimaryCTAClick}>
            {t('hero.cta-primary')}
          </Button>
          <Button href="/projects" variant={ButtonVariant.secondary} onClick={onSecondaryCTAClick}>
            {t('hero.cta-secondary')}
          </Button>
        </div>

        <SkillsIcons />
      </div>
    </div>
  );
};
