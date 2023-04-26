/* eslint-disable no-unused-vars */
import { useCallback, useRef, useState } from 'react';

import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';

import { Flag } from '@/components/ui';
import { useOnClickOutside } from '@/lib/hooks';

import styles from './LanguageSwitcher.module.css';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const { language: currentLanguage } = i18n;
  const router = useRouter();
  const locales = router.locales ?? [currentLanguage];

  const [current, setCurrent] = useState(i18n.language);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const ref = useRef(null);
  useOnClickOutside(ref, () => setIsDropdownOpen(false));

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const switchToLocale = useCallback(
    (locale: string) => {
      const path = router.asPath;

      return router.push(path, path, { locale, scroll: false });
    },
    [router]
  );

  const changeLanguage = useCallback(
    async (newLocale: string) => {
      setCurrent(newLocale);
      await switchToLocale(newLocale);
    },
    [switchToLocale]
  );

  const renderLocales = () => (
    <div className={styles.list}>
      {locales.map((locale) => (
        <Flag key={locale} locale={locale} onClick={() => changeLanguage(locale)} />
      ))}
    </div>
  );

  return (
    <div className={styles.container} ref={ref}>
      <Flag locale={current} onClick={() => toggleDropdown()} />
      {isDropdownOpen && renderLocales()}
    </div>
  );
};
