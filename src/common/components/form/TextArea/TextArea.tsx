import React from 'react';

import { UseFormRegister } from 'react-hook-form';

import type { Inputs, InputType } from '@/modules/forms/ContactForm';

import styles from './TextArea.module.css';

interface TextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {
  id: InputType;
  register: UseFormRegister<Inputs>;
  registerOptions: any;
}

export const TextArea = ({ id, register, registerOptions, ...textAreaProps }: TextAreaProps) => (
  <textarea className={styles.container} id={id} {...register(id, registerOptions)} {...textAreaProps} />
);
