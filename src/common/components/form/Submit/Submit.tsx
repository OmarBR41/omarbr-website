import React from 'react';

import classNames from 'classnames';

import { Button } from '@/components/ui';

import styles from './Submit.module.css';

interface SubmitProps {
  label: string;
  isDisabled: boolean;
}

export const Submit = ({ label, isDisabled }: SubmitProps) => {
  const submitClasses = classNames(styles.container, { [styles.containerDisabled]: isDisabled });

  return (
    <Button disabled={isDisabled} extraClassNames={submitClasses} type="submit">
      {label}
    </Button>
  );
};
