import React from 'react';

import styles from './Label.module.css';

interface LabelProps {
  id: string;
  children: any;
}

export const Label = ({ id, children }: LabelProps) => (
  <label className={styles.label} htmlFor={id}>
    {children}
  </label>
);
