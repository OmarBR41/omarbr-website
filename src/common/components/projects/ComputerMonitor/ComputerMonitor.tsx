import React from 'react';

import Image from 'next/image';

import { InDevelopment } from '@/components/ui/InDevelopment';
import styles from './ComputerMonitor.module.css';

interface ComputerMonitorProps {
  monitorImage?: string;
  isInDevelopment?: boolean;
}

const ComputerMonitor = ({ monitorImage, isInDevelopment }: ComputerMonitorProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.monitor}>
        {isInDevelopment && <InDevelopment />}

        {monitorImage && (
          <div className={styles.monitorImageContainer}>
            <div className={styles.imageOverlay} />
            <Image alt="" className={styles.monitorImage} fill src={monitorImage} unoptimized />
          </div>
        )}
      </div>
    </div>
  );
};

ComputerMonitor.defaultProps = {
  monitorImage: undefined,
  isInDevelopment: undefined,
};

export { ComputerMonitor };
