import React from 'react';

import { getCookie } from 'cookies-next';

import { IS_PRODUCTION } from '@/common/lib/constants/environment';

import { GTagConsentGranted } from './GTagConsentGranted';
import { GTagDefaultConsent } from './GTagDefaultConsent';
import { GTagID } from './GTagID';
import { GTagInit } from './GTagInit';

export const GAScripts = () => {
  const consent = getCookie('localConsent');

  if (!IS_PRODUCTION) {
    return null;
  }

  return (
    <>
      <GTagDefaultConsent />
      <GTagInit />
      <GTagID />
      {consent && <GTagConsentGranted />}
    </>
  );
};
