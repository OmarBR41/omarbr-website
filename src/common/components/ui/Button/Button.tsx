import React from 'react';

import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';

import classNames from 'classnames';

import styles from './Button.module.css';

type ButtonType = 'primary' | 'secondary';

interface ButtonProps {
  children?: any;
  href?: Url;
  isTargetExternal?: boolean;
  onClick?: () => {};
  type: ButtonType;
}

export const Button = ({ children, href, isTargetExternal, onClick, type }: ButtonProps) => {
  const buttonClassNames = classNames(styles.container, {
    [styles.btnPrimary]: type === 'primary',
    [styles.btnSecondary]: type === 'secondary',
  });

  if (href !== undefined && !isTargetExternal) {
    return (
      <Link className={buttonClassNames} href={href} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClassNames} onClick={onClick} type="button">
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: undefined,
  href: undefined,
  onClick: undefined,
  isTargetExternal: false,
};
