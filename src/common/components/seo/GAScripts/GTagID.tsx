import Script from 'next/script';

import { GA_TRACKING_ID } from '@/common/config/analytics';

export const GTagID = () => (
  <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
);
