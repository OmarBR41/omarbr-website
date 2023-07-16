import React from 'react';

import { useRouter } from 'next/router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'next-i18next';

import styles from './GoBack.module.css';

export const GoBack = () => {
  const { t } = useTranslation('common');
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className={styles.container} onClick={handleGoBack}>
      <FontAwesomeIcon className={styles.icon} icon={faArrowLeft} />
      <p className={styles.text}>{t('misc.go-back')}</p>
    </div>
  );
};
