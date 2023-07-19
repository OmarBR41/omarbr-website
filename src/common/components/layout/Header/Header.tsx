import React, { useEffect, useRef, useState } from 'react';

import { useTranslation } from 'next-i18next';

import { MenuButton, Nav, ThemeToggler } from '@/components/nav';
import { Button, Logo } from '@/components/ui';
import { MD_SIZE } from '@/constants/screenBreakpoints';
import { useOnClickOutside, useOnRouteChange, useWindowSize } from '@/lib/hooks';
import { LanguageSwitcher } from '../LanguageSwitcher';

import styles from './Header.module.css';

export const Header: React.FC = () => {
  const { t } = useTranslation('common');
  const ref = useRef(null);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const closeNav = () => setIsNavOpen(false);

  const { width } = useWindowSize();
  useOnClickOutside(ref, () => closeNav());
  useOnRouteChange(closeNav);

  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (width && width >= MD_SIZE) {
      closeNav();
    }
  }, [width]);

  return (
    <header className={styles.container} ref={ref}>
      <div className={styles.wrapper}>
        <MenuButton isNavOpen={isNavOpen} onClick={toggleNav} />

        <div className={styles.logoContainer}>
          <Logo />
        </div>

        <Nav isNavOpen={isNavOpen} />

        <div className={styles.rightGroup}>
          <LanguageSwitcher />
          <ThemeToggler />

          <Button extraClassNames={styles.cta} href="/contact-me">
            {t('nav.contact')}
          </Button>
        </div>
      </div>
    </header>
  );
};
