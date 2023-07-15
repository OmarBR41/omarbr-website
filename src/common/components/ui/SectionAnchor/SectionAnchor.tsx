import React from 'react';

import styles from './SectionAnchor.module.css';

interface SectionAnchorProps {
  id: string;
}

// Used as the anchor of a section (e.g. adding an id to an element to redirect to the section using /url#id
// Applies a negative offset equivalent to the Header height to avoid scrolling past the start of the section
const SectionAnchor = ({ id }: SectionAnchorProps) => <div className={styles.anchor} id={id} />;

export { SectionAnchor };
