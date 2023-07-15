import React from 'react';

import classNames from 'classnames';

import { ExtraClassNamesProps, useExtraClassNames } from '@/common/lib/hooks/useExtraClassNames';

import styles from './Title.module.css';

interface TitleProps extends ExtraClassNamesProps {
  children: React.ReactNode;
}

export const Title = ({ children, extraClassNames }: TitleProps) => {
  const validatedExtraClassNames = useExtraClassNames(extraClassNames);
  const titleClassNames = classNames(
    styles.container,
    // Add extraClassNames if not undefined
    validatedExtraClassNames
  );

  return <h1 className={titleClassNames}>{children}</h1>;
};
