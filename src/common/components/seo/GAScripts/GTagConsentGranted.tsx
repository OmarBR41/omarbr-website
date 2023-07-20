/* eslint-disable react/no-danger */
import Script from 'next/script';

export const GTagConsentGranted = () => (
  <Script
    dangerouslySetInnerHTML={{
      __html: `
        gtag('consent', 'update', {
          'ad_storage': 'granted',
          'analytics_storage': 'granted'
        });
      `,
    }}
    id="gtag-granted"
    strategy="afterInteractive"
  />
);
