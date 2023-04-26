import Image from 'next/image';

import styles from './Flag.module.css';

interface FlagProps {
  locale: string;
  onClick: () => void;
}

export const Flag = ({ locale, onClick }: FlagProps) => (
  <div className={styles.container} onClick={onClick} onKeyDown={onClick} role="button" tabIndex={0}>
    <Image alt={`Flag for ${locale} locale`} fill src={`/flags/${locale}.svg`} />
  </div>
);
