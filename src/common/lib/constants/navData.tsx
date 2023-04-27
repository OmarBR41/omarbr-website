import { faHome, faToolbox, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const navData = [
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
