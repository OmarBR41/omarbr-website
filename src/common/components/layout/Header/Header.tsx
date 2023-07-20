import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';

import { MenuButton, Nav, ThemeToggler } from '@/components/nav';
import { Button, Logo } from '@/components/ui';

import { event } from '@/config/analytics';
import { MD_SIZE } from '@/constants/screenBreakpoints';

import { useUpdateEffect, useOnClickOutside, useOnRouteChange, useWindowSize } from '@/lib/hooks';

import { LanguageSwitcher } from '../LanguageSwitcher';

import styles from './Header.module.css';

const HEADER_EVENT_CATEGORY = 'Header';
const SIDEBAR_EVENT_CATEGORY = 'Sidebar';

export const Header: React.FC = () => {
  const { t } = useTranslation('common');
  const { width } = useWindowSize();
  const ref = useRef(null);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const closeNav = useCallback(() => isNavOpen && setIsNavOpen(false), [isNavOpen]);

  useOnClickOutside(ref, () => {
    if (!isNavOpen) {
      return;
    }

    event({
      action: 'Clicked Outside Sidebar',
      category: SIDEBAR_EVENT_CATEGORY,
    });

    closeNav();
  });

  useOnRouteChange(closeNav);

  const toggleNav = () => {
    const action = isNavOpen ? 'Clicked Close Sidebar' : 'Clicked Menu Button';

    event({
      action,
      category: HEADER_EVENT_CATEGORY,
    });

    setIsNavOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (width && width >= MD_SIZE && isNavOpen) {
      event({
        action: 'Breakpoint',
        category: SIDEBAR_EVENT_CATEGORY,
        label: `Closing Sidebar, width: ${width}`,
      });

      closeNav();
    }
  }, [width]);

  useUpdateEffect(() => {
    const action = isNavOpen ? 'Opened Sidebar' : 'Closed Sidebar';

    event({
      action,
      category: SIDEBAR_EVENT_CATEGORY,
    });
  }, [isNavOpen]);

  const onContactCTAClick = () => {
    event({
      action: 'Clicked Contact CTA',
      category: HEADER_EVENT_CATEGORY,
    });
  };

  return (
    <header className={styles.container} ref={ref}>
      <div className={styles.wrapper}>
        <MenuButton isNavOpen={isNavOpen} onClick={toggleNav} />

        <div className={styles.logoContainer}>
          <Logo eventCategory={HEADER_EVENT_CATEGORY} />
        </div>

        <Nav isNavOpen={isNavOpen} />

        <div className={styles.rightGroup}>
          <LanguageSwitcher />
          <ThemeToggler />

          <Button extraClassNames={styles.cta} href="/contact-me" onClick={onContactCTAClick}>
            {t('nav.contact')}
          </Button>
        </div>
      </div>
    </header>
  );
};
