export type ClassNameType = undefined | string | string[];

export interface ExtraClassNamesProps {
  extraClassNames?: ClassNameType;
}

export const useExtraClassNames = (extraClassNames: ClassNameType) => {
  const isUndefined = extraClassNames === undefined;
  const isEmptyArray = Array.isArray(extraClassNames) && extraClassNames.length === 0;

  if (isUndefined || isEmptyArray) {
    return '';
  }

  return extraClassNames;
};
