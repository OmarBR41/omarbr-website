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
    navData.map(({ id, text, href, icon }, idx) => (
      <Fragment key={id}>
        <NavLink href={href} icon={icon} text={text} />
        {idx < lastIdx && <span className={styles.separator} />}
      </Fragment>
    ));

  return <nav className={navClasses}>{renderNavLinks()}</nav>;
};

export { Nav };
