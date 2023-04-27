import React from 'react';

import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';

import classNames from 'classnames';

import styles from './Button.module.css';

type ButtonType = 'primary' | 'secondary';

interface ButtonProps {
  type: ButtonType;
  children?: any;
  extraClassNames?: string | string[];
  href?: Url;
  isTargetExternal?: boolean;
  onClick?: () => {};
}

export const Button = ({ children, extraClassNames, href, isTargetExternal, onClick, type }: ButtonProps) => {
  const buttonClassNames = classNames(
    styles.container,
    {
      [styles.btnPrimary]: type === 'primary',
      [styles.btnSecondary]: type === 'secondary',
    },
    // Add extraClassNames if not undefined
    extraClassNames !== undefined && {
      // Add it as inputted if it's a string
      [extraClassNames as string]: typeof extraClassNames === 'string',
      // Add all of them if they're in an array
    },
    Array.isArray(extraClassNames) && extraClassNames.map((cn: string) => cn)
  );

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
  extraClassNames: undefined,
  href: undefined,
  onClick: undefined,
  isTargetExternal: false,
};
