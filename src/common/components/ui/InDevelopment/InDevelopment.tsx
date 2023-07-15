import React from 'react';
import { useTranslation } from 'next-i18next';

import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './InDevelopment.module.css';

const InDevelopment = () => {
  const { t } = useTranslation('projects');

  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faGear} />
      <p className={styles.text}>{t('in-development')}</p>
    </div>
  );
};

export { InDevelopment };
