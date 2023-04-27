import { Fragment } from 'react';

import classNames from 'classnames';
import { useTranslation } from 'next-i18next';

import { Button } from '@/components/ui';
import { navData } from '@/constants/navData';

import { NavLink } from '../NavLink';

import styles from './Nav.module.css';

interface NavProps {
  isNavOpen: boolean;
}

const Nav = ({ isNavOpen }: NavProps) => {
  const { t } = useTranslation('common');
  const navClasses = classNames(styles.container, { [styles.containerShown]: isNavOpen });
  const lastIdx = navData.length - 1;

  const renderNavLinks = () =>
    navData.map(({ id, href, icon }, idx) => (
      <Fragment key={id}>
        <NavLink href={href} icon={icon} id={id} />
        {idx < lastIdx && <span className={styles.separator} />}
      </Fragment>
    ));

  return (
    <nav className={navClasses}>
      {renderNavLinks()}

      <Button extraClassNames={styles.cta} href="/contact-me" type="primary">
        {t('nav.contact')}
      </Button>
    </nav>
  );
};

export { Nav };
