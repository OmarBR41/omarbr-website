/* eslint-disable no-console */
import { DEBUG_MODE, IS_DEVELOPMENT, IS_PRODUCTION } from '@/constants/environment';

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export type EventAction =
  // NextJS
  | 'CLS'
  | 'FCP'
  | 'FID'
  | 'INP'
  | 'LCP'
  | 'TTFB'
  | 'Next.js-hydration'
  | 'Next.js-route-change-to-render'
  | 'Next.js-render'
  // Errors
  | 'Error'
  // Nav
  | 'Clicked Logo'
  | 'Clicked Navigation Link'
  | 'Clicked Contact CTA'
  | 'Clicked Projects CTA'
  // Sidebar
  | 'Clicked Menu Button'
  | 'Clicked Close Sidebar'
  | 'Clicked Outside Sidebar'
  | 'Opened Sidebar'
  | 'Closed Sidebar'
  // Theme
  | 'Clicked Theme Toggler'
  // Language
  | 'Clicked Language Switcher'
  | 'Clicked Outside Language Options'
  | 'Opened Language Options'
  | 'Closed Language Options'
  | 'Changed Language'
  // About
  | 'Clicked CV'
  | 'Clicked Github'
  | 'Clicked LinkedIn'
  | 'Clicked Work Experience CTA'
  | 'Clicked Job Card'
  | 'Clicked Job Logo'
  // Projects
  | 'Clicked Project Card'
  | 'Clicked Project Icon'
  // Contact
  | 'Focused Form Field'
  | 'Unfocused Form Field'
  | 'Changed Form Field'
  | 'Invalid Form Field'
  | 'Completed Form Field'
  | 'Submitted Form'
  | 'Sending Form'
  | 'Failed Form'
  | 'Sent Form'
  // Misc
  | 'Breakpoint';

export type EventCategory =
  // NextJS
  | 'Web Vitals'
  | 'Next.js custom metric'
  // Common
  | 'Header'
  | 'Sidebar'
  | 'Footer'
  // Errors
  | 'Errors - 404'
  | 'Errors - 500'
  // Home
  | 'Home - Hero'
  | 'Home - About'
  | 'Home - Projects'
  | 'Home - Contact'
  // About
  | 'About Me - Overview'
  | 'About Me - Work Experience'
  // Projects
  | 'Projects Index'
  | 'Project Details'
  | 'Other Projects'
  // Contact
  | 'Contact - Form'
  | 'Contact - Links';

interface Event {
  action: EventAction;
  category: EventCategory;
  label?: string;
  value?: number;
  [key: string]: any;
}

let canSendEvents = false;

const isGtagAvailable = () => {
  const logPrefix = '[Analytics] GTag not available: ';

  if (typeof window === 'undefined') {
    console.warn(`${logPrefix} 'window' is undefined.`);
    return false;
  }

  const isGtagInWindow = window.hasOwnProperty('gtag');

  if (!isGtagInWindow) {
    console.warn(`${logPrefix} 'window' does not have 'gtag' defined as a property`);
    return false;
  }

  return true;
};

export const initialSetup = () => {
  const logPrefix = '[Analytics] GA disabled:';

  if (DEBUG_MODE) {
    console.log(`[Analytics] GA enabled on debug mode`);
    return;
  }

  if (IS_DEVELOPMENT) {
    console.warn(`${logPrefix} Running on development mode`);
    return;
  }

  if (!IS_PRODUCTION) {
    console.warn(`${logPrefix} Not running on production mode`);
    return;
  }

  if (!isGtagAvailable()) {
    console.warn(`${logPrefix} GTag not available`);
    return;
  }

  canSendEvents = true;
};

const shouldSendEvent = (debugLog?: string) => {
  if (DEBUG_MODE && debugLog) {
    console.log(`[Analytics] ${debugLog}`);
    return;
  }

  return canSendEvents;
};

// Runs on app's initial mount to see where they landed
export const initialLoadEvent = (url: string) => {
  const debugLog = `initialLoad: ${url}`;

  if (shouldSendEvent(debugLog)) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Runs on every page load
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageView = (url: string) => {
  const debugLog = `pageView: ${url}`;

  if (shouldSendEvent(debugLog)) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// For user events like clicks, touches, dragging, text inputs, form submission, and more.
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value, extraDimensions }: Event) => {
  const event = {
    event_category: category,
    ...(label && { event_label: label }),
    ...(value && { value }),
    ...extraDimensions,
  };

  const debugLog = `event: {\n  action: ${action},\n${Object.entries(event)
    .map(([k, v]) => `  ${k}: ${v},\n`)
    .join('')})}`;

  if (shouldSendEvent(debugLog)) {
    window.gtag('event', action, event);
  }
};

initialSetup();
