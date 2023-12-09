import { UMAMI_URL, UMAMI_TRACKING_CODE } from '@/config/analytics';

export const UmamiScript = () =>
  UMAMI_URL &&
  UMAMI_TRACKING_CODE && (
    <script async src={`${UMAMI_URL}/script.js`} data-website-id={UMAMI_TRACKING_CODE} id="umami" />
  );
