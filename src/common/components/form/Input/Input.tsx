import React from 'react';

import styles from './Input.module.css';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  id: string;
}

export const Input = ({ id, ...inputProps }: InputProps) => (
  <input className={styles.container} id={id} name={id} {...inputProps} />
);
