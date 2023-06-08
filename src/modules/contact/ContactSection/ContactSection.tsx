import React from 'react';

import { useTranslation } from 'next-i18next';

import { ContactForm } from '@/modules/forms';

import styles from './ContactSection.module.css';

export const ContactSection: React.FC = () => {
  const { t } = useTranslation('contact');

  return (
    <section className={styles.container}>
      <h1 className={styles.header}>{t('header')}</h1>
      <ContactForm />
    </section>
  );
};
