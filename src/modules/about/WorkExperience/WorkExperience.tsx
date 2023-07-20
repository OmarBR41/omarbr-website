import React, { useCallback } from 'react';

import Image from 'next/image';
import { Trans, useTranslation } from 'next-i18next';

import { Title, SectionAnchor } from '@/components/ui';
import { WORK_EXPERIENCE } from '@/constants/jobs';
import { slugify } from '@/lib/utils';

import styles from './WorkExperience.module.css';
import { event } from '@/common/config/analytics';

export const WorkExperience = () => {
  const { t, i18n } = useTranslation('about');
  const { language } = i18n;

  const formatWorkDateRange = (startDate: string, endDate: string) => {
    const options: Intl.DateTimeFormatOptions = { year: '2-digit', month: 'short' };

    const startDateLocalized = new Date(startDate).toLocaleDateString(language, options);
    const endDateLocalized = new Date(endDate).toLocaleDateString(language, options);

    return `${startDateLocalized} - ${endDateLocalized}`;
  };

  const onLogoClick = (id: string) => {
    event({
      action: 'Clicked Job Logo',
      category: 'About Me - Work Experience',
      label: id,
    });
  };

  const onCardClick = (id: string) => {
    event({
      action: 'Clicked Job Card',
      category: 'About Me - Work Experience',
      label: id,
    });
  };

  const renderJobsTimeline = useCallback(
    () =>
      WORK_EXPERIENCE.map(({ companyName, companyLogoUrl, jobTitle, startDate, endDate }) => (
        <div className={styles.timelineBlock} key={companyName}>
          <div className={styles.imageContainer} onClick={() => onLogoClick(companyName)}>
            <Image className={styles.image} src={companyLogoUrl} width={20} height={20} alt={`${companyName}'s logo`} />
          </div>

          <div className={styles.timelineContent} onClick={() => onCardClick(companyName)}>
            <div className={styles.headerContainer}>
              <h3 className={styles.companyName}>{companyName}</h3>
              <p className={styles.dates}>{formatWorkDateRange(startDate, endDate)}</p>
            </div>

            <span className={styles.jobTitle}>{t(`jobs.${jobTitle}`)}</span>

            <div className={styles.divider} />

            <p className={styles.jobOverview}>
              <Trans t={t} i18nKey={`jobs.${slugify(companyName)}`} />
            </p>
          </div>
        </div>
      )),
    [t]
  );

  return (
    <section className={styles.container}>
      <SectionAnchor id="work-experience" />

      <Title>{t('work-experience')}</Title>

      <div className={styles.timelineContainer}>{renderJobsTimeline()}</div>
    </section>
  );
};
