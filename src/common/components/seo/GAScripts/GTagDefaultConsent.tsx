/* eslint-disable react/no-danger */
import Script from 'next/script';

export const GTagDefaultConsent = () => (
  <Script
    dangerouslySetInnerHTML={{
      __html: `
          // Define dataLayer and the gtag function.
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          // Default ad_storage to 'denied' as a placeholder
          // Determine actual values based on your own requirements
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied'
          });
          `,
    }}
    id="gtag-default"
    strategy="afterInteractive"
  />
);
