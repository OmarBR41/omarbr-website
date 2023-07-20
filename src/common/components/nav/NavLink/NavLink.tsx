import Link from 'next/link';

import { useTranslation } from 'next-i18next';

import { event } from '@/config/analytics';
import { MD_SIZE } from '@/constants/screenBreakpoints';
import { useWindowSize } from '@/lib/hooks/useWindowSize';

import styles from './NavLink.module.css';

interface NavLinkProps {
  href: string;
  icon: JSX.Element;
  id: string;
}

export const NavLink = ({ href, id, icon }: NavLinkProps) => {
  const { width } = useWindowSize();
  const { t } = useTranslation('common');

  const onNavLinkClick = () => {
    const category = width && width >= MD_SIZE ? 'Header' : 'Sidebar';

    event({
      action: 'Clicked Navigation Link',
      category,
    });
  };

  return (
    <Link className={styles.container} href={href} onClick={onNavLinkClick}>
      {icon}
      {t(`nav.${id}`)}
    </Link>
  );
};
