import React, { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';

import { faMoon, faSun, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './ThemeToggler.module.css';

const ThemeToggler = () => {
  const [themeIcon, setThemeIcon] = useState<IconDefinition>(faSun);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setThemeIcon(resolvedTheme === 'dark' ? faMoon : faSun);
  }, [resolvedTheme]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button className={styles.toggler} onClick={toggleTheme} type="button">
      <FontAwesomeIcon icon={themeIcon} />
    </button>
  );
};

export { ThemeToggler };
