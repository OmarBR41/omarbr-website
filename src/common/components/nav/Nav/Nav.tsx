import { Fragment } from 'react';

import classNames from 'classnames';
import { useTranslation } from 'next-i18next';

import { Button } from '@/components/ui';
import { event } from '@/config/analytics';
import { HEADER_NAV } from '@/constants/navData';

import { NavLink } from '../NavLink';

import styles from './Nav.module.css';

interface NavProps {
  isNavOpen: boolean;
}

const SIDEBAR_EVENT_CATEGORY = 'Sidebar';

const Nav = ({ isNavOpen }: NavProps) => {
  const { t } = useTranslation('common');
  const navClasses = classNames(styles.container, { [styles.containerShown]: isNavOpen });

  const onContactCTAClick = () => {
    event({
      action: 'Clicked Contact CTA',
      category: SIDEBAR_EVENT_CATEGORY,
    });
  };

  const renderNavLinks = () =>
    HEADER_NAV.map(({ id, href, icon }) => (
      <Fragment key={id}>
        <NavLink href={href} icon={icon} id={id} />
      </Fragment>
    ));

  return (
    <nav className={navClasses}>
      <div className={styles.navLinks}>{renderNavLinks()}</div>

      <Button extraClassNames={styles.cta} href="/contact-me" onClick={onContactCTAClick}>
        {t('nav.contact')}
      </Button>
    </nav>
  );
};

export { Nav };
