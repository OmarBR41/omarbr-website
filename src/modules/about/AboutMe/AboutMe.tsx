import React from 'react';

import Image from 'next/image';

import { Trans, useTranslation } from 'next-i18next';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { LinkWithIcon, Title } from '@/components/ui';
import { SocialMedia } from '@/modules/contact/SocialMedia';

import styles from './AboutMe.module.css';

interface AboutMeProps {
  shouldShowWorkExperienceLink?: boolean;
}

export const AboutMe = ({ shouldShowWorkExperienceLink }: AboutMeProps) => {
  const { t } = useTranslation('about');

  return (
    <section className={styles.container}>
      <Title>{t('title')}</Title>

      <div className={styles.aboutContainer}>
        <div className={styles.imageContainer}>
          <Image alt="" className={styles.image} width={836} height={793} src="/profile-pic.png" />
        </div>

        <div className={styles.textContainer}>
          <p className={styles.text}>
            <Trans i18nKey="text" t={t} />
          </p>
          <SocialMedia />

          {shouldShowWorkExperienceLink && (
            <LinkWithIcon href="/about-me#work-experience" text={t('see-work-experience')} icon={faArrowRight} />
          )}
        </div>
      </div>
    </section>
  );
};

AboutMe.defaultProps = {
  shouldShowWorkExperienceLink: false,
};
