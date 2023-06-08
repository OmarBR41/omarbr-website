import React from 'react';

import { useTranslation } from 'next-i18next';

import styles from './ThankYou.module.css';

export const ThankYou = () => {
  const { t } = useTranslation('contact');

  return (
    <div className={styles.container}>
      <p className={styles.text}>{t('form.thank-you')}</p>
    </div>
  );
};
