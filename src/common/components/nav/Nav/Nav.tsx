import { Fragment } from 'react';

import classNames from 'classnames';

import { navData } from '@/constants/navData';

import { NavLink } from '../NavLink';

import styles from './Nav.module.css';

interface NavProps {
  isNavOpen: boolean;
}

const Nav = ({ isNavOpen }: NavProps) => {
  const navClasses = classNames(styles.container, { [styles.containerShown]: isNavOpen });
  const lastIdx = navData.length - 1;

  const renderNavLinks = () =>
    navData.map(({ id, label, href, icon }, idx) => (
      <Fragment key={id}>
        <NavLink href={href} icon={icon} label={label} />
        {idx < lastIdx && <span className={styles.separator} />}
      </Fragment>
    ));

  return <nav className={navClasses}>{renderNavLinks()}</nav>;
};

export { Nav };
