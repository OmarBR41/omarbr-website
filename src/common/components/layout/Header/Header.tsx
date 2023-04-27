import React, { useEffect, useRef, useState } from 'react';

import { MenuButton, Nav, ThemeToggler } from '@/components/nav';
import { Logo } from '@/components/ui';
import { MD_SIZE } from '@/constants/screenBreakpoints';
import { useOnClickOutside, useWindowSize } from '@/lib/hooks';

import styles from './Header.module.css';

export const Header: React.FC = () => {
  const ref = useRef(null);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const closeNav = () => setIsNavOpen(false);

  const { width } = useWindowSize();
  useOnClickOutside(ref, () => closeNav());

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
        <Logo />
        <Nav isNavOpen={isNavOpen} />
      </div>
    </header>
  );
};
