import React from 'react';

import Image from 'next/image';

import { InDevelopment } from '@/components/ui/InDevelopment';
import styles from './MobilePhone.module.css';

interface MobilePhoneProps {
  screenImage?: string;
  isInDevelopment?: boolean;
}

const MobilePhone = ({ screenImage, isInDevelopment }: MobilePhoneProps) => (
  <div className={styles.container}>
    {isInDevelopment && <InDevelopment />}

    <div className={styles.mobile}>
      <div className={styles.screen}>
        <div className={styles.imageOverlay} />
        {screenImage && <Image alt="" className={styles.screenImage} fill src={screenImage} unoptimized />}
      </div>

      <ul className={styles.volumeButtons}>
        <li />
        <li />
      </ul>
      <div className={styles.powerButton} />
    </div>
  </div>
);

MobilePhone.defaultProps = {
  screenImage: undefined,
  isInDevelopment: undefined,
};

export { MobilePhone };
