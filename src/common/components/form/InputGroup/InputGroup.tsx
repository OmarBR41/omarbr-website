import React from 'react';

import styles from './InputGroup.module.css';

interface InputGroupProps {
  children: any;
  errorMessage?: string;
}

export const InputGroup = ({ children, errorMessage }: InputGroupProps) => (
  <div className={styles.container}>
    {children}
    {Boolean(errorMessage) && <div className={styles.errorContainer}>{errorMessage}</div>}
  </div>
);

InputGroup.defaultProps = {
  errorMessage: undefined,
};
