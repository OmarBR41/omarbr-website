import { faHome, faToolbox, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HEADER_NAV = [
  {
    href: '/',
    icon: <FontAwesomeIcon icon={faHome} />,
    id: 'home',
  },
  {
    href: '/about-me',
    icon: <FontAwesomeIcon icon={faUser} />,
    id: 'about',
  },
  {
    href: '/projects',
    icon: <FontAwesomeIcon icon={faToolbox} />,
    id: 'projects',
  },
];

export const FOOTER_NAV_LEFT = [
  ...HEADER_NAV,
  {
    href: '/contact-me',
    id: 'contact-form',
  },
];

export const FOOTER_NAV_RIGHT = [
  {
    href: '/privacy-policy',
    id: 'privacy',
  },
  {
    href: '/terms-of-use',
    id: 'terms',
  },
  {
    href: '/cookies-notice',
    id: 'cookies',
  },
  {
    href: '/sitemap.xml',
    id: 'sitemap',
  },
];
