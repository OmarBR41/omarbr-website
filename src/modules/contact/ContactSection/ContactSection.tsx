import React from 'react';

import { useTranslation } from 'next-i18next';

import { Title } from '@/components/ui';
import { ContactForm } from '@/modules/forms';

import styles from './ContactSection.module.css';

export const ContactSection: React.FC = () => {
  const { t } = useTranslation('contact');

  return (
    <section className={styles.container}>
      <Title>{t('header')}</Title>
      <ContactForm />
    </section>
  );
};
