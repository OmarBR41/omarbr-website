import Link from 'next/link';

import { useTranslation } from 'next-i18next';

import styles from './NavLink.module.css';

interface NavLinkProps {
  href: string;
  icon: JSX.Element;
  id: string;
}

export const NavLink = ({ href, id, icon }: NavLinkProps) => {
  const { t } = useTranslation('common');

  return (
    <Link className={styles.container} href={href}>
      {icon}
      {t(`nav.${id}`)}
    </Link>
  );
};
