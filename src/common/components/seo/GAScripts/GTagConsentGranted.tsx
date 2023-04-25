/* eslint-disable react/no-danger */
export const GTagConsentGranted = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `
        gtag('consent', 'update', {
          'ad_storage': 'granted',
          'analytics_storage': 'granted'
        });
      `,
    }}
    id="gtag-granted"
  />
);
