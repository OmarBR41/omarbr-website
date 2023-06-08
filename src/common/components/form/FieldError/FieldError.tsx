import React from 'react';

import styles from './FieldError.module.css';

interface FieldErrorProps {
  message: string;
}

export const FieldError = ({ message }: FieldErrorProps) => (
  <span className={styles.container}>
    <p className={styles.errorMessage}>{message}</p>
  </span>
);
