import React from 'react';

import { faBars, faMultiply } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './MenuButton.module.css';

interface MenuButtonProps {
  isNavOpen: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const MenuButton = ({ isNavOpen, onClick }: MenuButtonProps) => (
  <button className={styles.menuButton} onClick={onClick} type="button">
    <FontAwesomeIcon icon={isNavOpen ? faMultiply : faBars} />
  </button>
);

export { MenuButton };
