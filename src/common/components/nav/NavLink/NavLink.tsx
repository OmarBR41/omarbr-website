import Link from 'next/link';

import styles from './NavLink.module.css';

interface NavLinkProps {
  href: string;
  text: string;
  icon: JSX.Element;
}

export const NavLink = ({ href, text, icon }: NavLinkProps) => (
  <Link className={styles.container} href={href}>
    {icon}
    {text}
  </Link>
);
