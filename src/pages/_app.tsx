/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';

import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { Roboto_Mono as RobotoMono } from 'next/font/google';
import { useRouter } from 'next/router';

import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { initialLoadEvent, event, pageView } from '@/config/analytics';
import { Head, Main } from '@/modules/layout';

import '@/common/styles/globals.css';

config.autoAddCss = false;

const roboto = RobotoMono({
  subsets: ['latin'],
});

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    document.body.classList?.remove('loading');
    initialLoadEvent(router.asPath);
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageView(url);
    };
    // When the component is mounted, subscribe to router changes
    // and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <style global jsx>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <Head />
      <ThemeProvider>
        <Main>
          <Component {...pageProps} />
        </Main>
      </ThemeProvider>
    </>
  );
};

export function reportWebVitals({ id, name, label, value }: NextWebVitalsMetric) {
  event({
    action: name,
    category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    label: id, // id unique to current page load
    value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
  });
}

export default appWithTranslation(App);
