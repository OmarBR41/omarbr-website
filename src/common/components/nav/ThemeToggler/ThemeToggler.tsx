import React, { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';

import { faMoon, faSun, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { event } from '@/config/analytics';

import styles from './ThemeToggler.module.css';

const ThemeToggler = () => {
  const [themeIcon, setThemeIcon] = useState<IconDefinition>(faSun);
  const { theme, resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setThemeIcon(resolvedTheme === 'dark' ? faMoon : faSun);
  }, [resolvedTheme]);

  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';

    event({
      action: 'Clicked Theme Toggler',
      category: 'Header',
      label: `${theme} > ${newTheme}`,
    });

    setTheme(newTheme);
  };

  return (
    <button className={styles.toggler} onClick={toggleTheme} type="button">
      <FontAwesomeIcon icon={themeIcon} />
    </button>
  );
};

export { ThemeToggler };
