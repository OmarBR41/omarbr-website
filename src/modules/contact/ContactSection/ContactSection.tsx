import React from 'react';

import { useTranslation } from 'next-i18next';

import styles from './ContactSection.module.css';

export const ContactSection: React.FC = () => {
  const { t } = useTranslation('contact');

  return (
    <section className={styles.container}>
      <h1 className={styles.header}>{t('header')}</h1>
    </section>
  );
};
