import React from 'react';

import { UseFormRegister } from 'react-hook-form';

import type { Inputs, InputType } from '@/modules/forms/ContactForm';

import styles from './Input.module.css';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  id: InputType;
  register: UseFormRegister<Inputs>;
  registerOptions: any;
}

export const Input = ({ id, register, registerOptions, ...inputProps }: InputProps) => (
  <input className={styles.container} id={id} {...register(id, registerOptions)} {...inputProps} />
);
