export type Depth = number | string;

export interface Style {
  shadow: string;
  zIndex: string;
}

const toRecord = <T>() => (
  acc: Record<string, T>,
  value: T,
  i: number,
): Record<string, T> => ({ ...acc, [i]: value });

const styles: Style[] = [
  { shadow: 'shadow-none', zIndex: 'z-0' },
  { shadow: 'shadow-sm', zIndex: 'z-10' },
  { shadow: 'shadow', zIndex: 'z-20' },
  { shadow: 'shadow-lg', zIndex: 'z-30' },
  { shadow: 'shadow-xl', zIndex: 'z-40' },
  { shadow: 'shadow-2xl', zIndex: 'z-50' },
];
const styleMap = styles.reduce(toRecord(), {});

export const validateDepth = (depth: Depth): boolean => depth in styleMap;

export const toStyle = (depth: Depth): Style => styleMap[depth] ?? styleMap[0];
