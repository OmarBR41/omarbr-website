import React from 'react';

import classNames from 'classnames';

import { Button } from '@/components/ui';

import styles from './Submit.module.css';

interface SubmitProps {
  label: string;
  isDisabled: boolean;
  onClick?: () => unknown;
}

export const Submit = ({ label, isDisabled, onClick }: SubmitProps) => {
  const submitClasses = classNames(styles.container, { [styles.containerDisabled]: isDisabled });

  return (
    <Button disabled={isDisabled} extraClassNames={submitClasses} type="submit" onClick={onClick}>
      {label}
    </Button>
  );
};
