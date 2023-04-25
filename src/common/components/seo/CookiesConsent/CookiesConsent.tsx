import React, { useEffect, useState } from 'react';

import { deleteCookie, getCookie, getCookies, hasCookie, setCookie } from 'cookies-next';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './CookiesConsent.module.css';

export const CookiesConsent = () => {
  const [shouldShow, setShouldShow] = useState(false);

  const acceptCookie = () => {
    setShouldShow(false);
    setCookie('localConsent', 'true', { maxAge: 60 * 60 * 24 * 365 });

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: 'granted',
        analytics_storage: 'granted',
      });
    }
  };

  useEffect(() => {
    if (!hasCookie('localConsent')) {
      setShouldShow(true);
    }

    if (getCookie('localConsent')) {
      acceptCookie();
    }
  }, []);

  const closeConsent = () => {
    setShouldShow(false);
  };

  const denyCookie = () => {
    setShouldShow(false);
    setCookie('localConsent', 'false', { maxAge: 60 * 60 * 24 * 365 });

    // Remove Google Analytics cookies
    const allCookies = getCookies();
    Object.keys(allCookies).forEach((cookie) => {
      if (cookie && (cookie.includes('_ga') || cookie.includes('_gid'))) {
        deleteCookie(cookie);
      }
    });
  };

  if (!shouldShow) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.text}>This website uses cookies to improve the user experience.</p>
        <button
          className={styles.denyButton}
          onClick={() => {
            denyCookie();
          }}
          type="button"
        >
          No
        </button>
      </div>
      <button
        className={styles.button}
        onClick={() => {
          acceptCookie();
        }}
        type="button"
      >
        Okay!
      </button>
      <button
        className={styles.closeButton}
        onClick={() => {
          closeConsent();
        }}
        type="button"
      >
        <FontAwesomeIcon icon={faPlus} size="sm" />
      </button>
    </div>
  );
};
