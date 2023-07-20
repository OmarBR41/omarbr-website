import { GA_TRACKING_ID } from '@/common/config/analytics';

export const GTagID = () => <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />;
