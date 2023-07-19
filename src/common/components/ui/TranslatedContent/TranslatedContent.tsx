import React from 'react';

import { TFunction, Trans } from 'next-i18next';

interface TranslatedContentProps {
  t: TFunction;
  i18nKey: string;
}

export const TranslatedContent = ({ t, i18nKey }: TranslatedContentProps) => (
  <Trans
    t={t}
    i18nKey={i18nKey}
    tOptions={{ myVar: 'interpolate', joinArrays: '<br />' }}
    components={[<h1 />, <strong />, <small />]}
  />
);
