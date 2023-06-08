import React from 'react';

import styles from './InputGroup.module.css';

interface InputGroupProps {
  children: any;
}

export const InputGroup = ({ children }: InputGroupProps) => <div className={styles.container}>{children}</div>;
