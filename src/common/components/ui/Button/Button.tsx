import React from 'react';

import Link from 'next/link';

import classNames from 'classnames';

import { ExtraClassNamesProps, useExtraClassNames } from '@/common/lib/hooks/useExtraClassNames';

import styles from './Button.module.css';

export enum ButtonVariant {
  'primary',
  'secondary',
}

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'>, ExtraClassNamesProps {
  children?: any;
  href?: string;
  isTargetExternal?: boolean;
  onClick?: () => unknown;
  variant?: ButtonVariant;
}

export const Button = ({
  children,
  href,
  isTargetExternal,
  onClick,
  variant,
  extraClassNames,
  ...buttonProps
}: ButtonProps) => {
  const validatedExtraClassNames = useExtraClassNames(extraClassNames);
  const buttonClassNames = classNames(
    styles.container,
    {
      [styles.btnPrimary]: variant === ButtonVariant.primary,
      [styles.btnSecondary]: variant === ButtonVariant.secondary,
    },
    // Add extraClassNames if not undefined
    validatedExtraClassNames
  );

  if (href !== undefined && !isTargetExternal) {
    return (
      <Link className={buttonClassNames} href={href} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClassNames} onClick={onClick} {...buttonProps}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: undefined,
  isTargetExternal: false,
  onClick: undefined,
  variant: ButtonVariant.primary,
};
