import React from 'react';

import { Button } from '@/components/ui';

import styles from './Submit.module.css';

interface SubmitProps {
  label: string;
}

export const Submit = ({ label }: SubmitProps) => (
  <Button extraClassNames={styles.container} type="submit">
    {label}
  </Button>
);
