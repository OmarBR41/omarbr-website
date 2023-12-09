import Umami from '@bitprojects/umami-logger-typescript';
import { UmamiEvent } from './events';

export const UMAMI_URL = process.env.NEXT_PUBLIC_UMAMI_URL ?? '';
export const UMAMI_TRACKING_CODE = process.env.NEXT_PUBLIC_UMAMI_TRACKING_CODE ?? '';

export const initialSetup = () => {
  Umami.initialize({
    baseUrl: UMAMI_URL,
    websiteId: UMAMI_TRACKING_CODE,
  });
};

// Runs on app's initial mount to see where they landed
export const initialLoadEvent = (url: string) => {
  Umami.trackEvent('initial-load', { url });
};

// Runs on every page load
export const pageView = (url: string) => {
  Umami.trackPageView(url);
};

// For user events like clicks, touches, dragging, text inputs, form submission, and more.
export const event = ({ action, category, label, value, extraDimensions }: UmamiEvent) => {
  const event = {
    event_category: category,
    ...(label && { event_label: label }),
    ...(value && { value }),
    ...extraDimensions,
  };

  Umami.trackEvent(action, event);
};
