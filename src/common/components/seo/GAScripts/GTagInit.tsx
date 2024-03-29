/* eslint-disable react/no-danger */
import { GA_TRACKING_ID } from '@/common/config/analytics';

export const GTagInit = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
    }}
    id="gtag-init"
  />
);
