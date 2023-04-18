import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
// import { faEnvelope, faToolbox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const navData = [
  {
    id: 0,
    icon: <FontAwesomeIcon icon={faHome} />,
    text: 'Home',
    href: '/',
  },
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faUser} />,
    text: 'About',
    href: '/#about',
  },
  // {
  //   id: 2,
  //   icon: <FontAwesomeIcon icon={faToolbox} />,
  //   text: 'Projects',
  //   href: '/#projects',
  // },
  // {
  //   id: 3,
  //   icon: <FontAwesomeIcon icon={faEnvelope} />,
  //   text: 'Contact',
  //   href: '/#contact',
  // },
];
