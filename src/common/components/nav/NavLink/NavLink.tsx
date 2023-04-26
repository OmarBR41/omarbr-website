import Link from 'next/link';

import { useTranslation } from 'next-i18next';

import styles from './NavLink.module.css';

interface NavLinkProps {
  href: string;
  label: string;
  icon: JSX.Element;
}

export const NavLink = ({ href, label, icon }: NavLinkProps) => {
  const { t } = useTranslation('common');

  return (
    <Link className={styles.container} href={href}>
      {icon}
      {t(`nav.${label}`)}
    </Link>
  );
};
