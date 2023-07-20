import React, { useCallback, useMemo } from 'react';

import { useTranslation } from 'next-i18next';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { SocialMediaIcon } from '@/components/ui/SocialMediaIcon';
import { replaceContentInsideParenthesis } from '@/common/lib/utils';

import { event, type EventCategory } from '@/config/analytics';

import styles from './SocialMedia.module.css';

interface SocialMediaIcon {
  id: string;
  icon: IconProp;
  url: string;
}

const SOCIAL_MEDIAS: SocialMediaIcon[] = [
  {
    id: 'cv',
    icon: faFilePdf,
    url: '/OmarBR_CV_(en).pdf',
  },
  {
    id: 'linkedin',
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/omarbr41',
  },
  {
    id: 'github',
    icon: faGithub,
    url: 'https://www.github.com/omarbr41',
  },
];

interface SocialMediaProps {
  eventCategory?: EventCategory;
}

export const SocialMedia = ({ eventCategory }: SocialMediaProps) => {
  const { i18n } = useTranslation();
  const { language } = i18n;

  const onIconClick = useCallback(
    (id: string) => {
      if (!eventCategory || !id) {
        return;
      }

      const action = (() => {
        switch (id) {
          case 'github':
            return 'Clicked Github';
          case 'linkedin':
            return 'Clicked LinkedIn';
          case 'cv':
            return 'Clicked CV';
          default:
            return null;
        }
      })();

      if (!action) {
        return;
      }

      event({
        action,
        category: eventCategory,
      });
    },
    [eventCategory]
  );

  const renderCV = useCallback(
    ({ id, icon, url }: SocialMediaIcon) => (
      <div className={styles.cvIcon} key={id}>
        <SocialMediaIcon
          icon={icon}
          id={id}
          url={replaceContentInsideParenthesis(url, language)}
          onClick={() => onIconClick(id)}
        />
      </div>
    ),
    [language]
  );

  const renderIcon = (iconProps: SocialMediaIcon) => {
    const { id } = iconProps;

    if (id === 'cv') {
      return renderCV(iconProps);
    }

    return <SocialMediaIcon key={id} onClick={() => onIconClick(id)} {...iconProps} />;
  };

  return <div className={styles.container}>{SOCIAL_MEDIAS.map((data) => renderIcon(data))}</div>;
};
