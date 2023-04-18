/* eslint-disable react/jsx-props-no-spreading */

import { useEffect } from 'react';

import type { AppProps } from 'next/app';
import { Roboto_Mono as RobotoMono } from 'next/font/google';

import { ThemeProvider } from 'next-themes';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { Head } from '@/components/seo/Head';
import { Head, Main } from '@/modules/layout';

import '@/common/styles/globals.css';

config.autoAddCss = false;

const roboto = RobotoMono({
  subsets: ['latin'],
});

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);

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

export default App;
