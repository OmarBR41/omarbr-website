import React from 'react';

import { useTranslation } from 'next-i18next';

import styles from './FormError.module.css';

export const FormError = () => {
  const { t } = useTranslation('contact');

  return (
    <div className={styles.container}>
      <p className={styles.text}>{t('form.error')}</p>
    </div>
  );
};
