import React from 'react';

import styles from './TextArea.module.css';

interface TextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {
  id: string;
}

export const TextArea = ({ id, ...textAreaProps }: TextAreaProps) => (
  <textarea className={styles.container} id={id} name={id} {...textAreaProps} />
);
