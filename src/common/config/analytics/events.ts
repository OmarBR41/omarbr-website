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

export type UmamiEvent = {
  action: EventAction;
  category: EventCategory;
  label?: string;
  value?: number;
  [key: string]: any;
};
