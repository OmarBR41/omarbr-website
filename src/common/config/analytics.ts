/* eslint-disable no-console */
import { IS_DEVELOPMENT, IS_PRODUCTION } from '@/constants/environment';

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

type EventName =
  | 'FCP'
  | 'LCP'
  | 'CLS'
  | 'FID'
  | 'TTFB'
  | 'Next.js-hydration'
  | 'Next.js-route-change-to-render'
  | 'Next.js-render'
  | string;

interface Event {
  action: EventName;
  category: string;
  label?: string;
  value?: number;
  [key: string]: any;
}

const isGtagAvailable = () => {
  const isGtagInWindow = window.hasOwnProperty('gtag');

  if (typeof window === 'undefined' || !isGtagInWindow) {
    console.warn(
      `Couldn't send event: window is of type ${typeof window} and does {isGtagInWindow ? "": "not"} have 'gtag' defined.`
    );

    return false;
  }

  return true;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageView = (url: string) => {
  if (IS_DEVELOPMENT) {
    console.log(`Sending pageView: {\n  GA_TRACKING_ID: ${GA_TRACKING_ID},\n  url: ${url}\n}`);
  }

  if (!IS_PRODUCTION || !isGtagAvailable()) {
    return;
  }

  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value, extraDimensions }: Event) => {
  const event = {
    event_category: category,
    event_label: label,
    value,
    ...extraDimensions,
  };

  if (IS_DEVELOPMENT) {
    console.log(
      `Sending event: {\n  action: ${action},\n${Object.entries(event)
        .map(([k, v]) => `  ${k}: ${v},\n`)
        .join('')})}`
    );
  }

  if (!IS_PRODUCTION || !isGtagAvailable()) {
    return;
  }

  window.gtag('event', action, event);
};
