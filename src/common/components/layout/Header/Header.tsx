import React, { useEffect, useRef, useState } from 'react';

import { MenuButton, Nav, ThemeToggler } from '@/components/nav';
import { Logo } from '@/components/ui';
import { MD_SIZE } from '@/constants/screenBreakpoints';
import { useOnClickOutside, useWindowSize } from '@/lib/hooks';

import styles from './Header.module.css';

export const Header: React.FC = () => {
  const ref = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const { width } = useWindowSize();
  useOnClickOutside(ref, () => setIsNavOpen(false));

  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (width && width >= MD_SIZE) {
      setIsNavOpen(false);
    }
  }, [width]);

  return (
    <header className={styles.container} ref={ref}>
      <MenuButton isNavOpen={isNavOpen} onClick={toggleNav} />
      <Logo />
      <Nav isNavOpen={isNavOpen} />
      <ThemeToggler />
    </header>
  );
};
