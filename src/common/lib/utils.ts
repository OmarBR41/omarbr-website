import { i18n } from 'next-i18next';

import { BASE_URL } from './constants';

export const getBaseUrlWithLocale = () => {
  const lang = i18n?.language;
  const isEng = lang === 'en';

  if (isEng) {
    return BASE_URL;
  }

  return `${BASE_URL}/${lang}`;
};

export const randomRange = (min: number, max: number) => Math.random() * (max - min) + min;

export const shuffleArray = (arr: any[]) => {
  let currentIndex = arr.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
  }

  return arr;
};

export const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const replaceContentInsideParenthesis = (str: string, newContent: string) =>
  str.replace(/(\(.*?\))/g, '(' + newContent + ')');
