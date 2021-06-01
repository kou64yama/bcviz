import { PropType } from '@vue/runtime-core';

export type Depth = number | string;
export const depthType = [Number, String] as PropType<Depth>;

export const validator = (depth: Depth): boolean => {
  if (typeof depth === 'string') return validator(parseInt(depth, 10));
  return Number.isInteger(depth) && 0 <= depth && depth <= 5;
};

type DepthMap<T> = [T, T, T, T, T, T];

const zIndecies: DepthMap<string> = [
  'z-0',
  'z-10',
  'z-20',
  'z-30',
  'z-40',
  'z-50',
];

export const toZIndex = (depth: Depth): string => {
  if (typeof depth === 'string') return toZIndex(parseInt(depth, 10));
  return zIndecies[depth];
};

const shadows: DepthMap<string> = [
  'shadow-none',
  'shadow-sm',
  'shadow',
  'shadow-lg',
  'shadow-xl',
  'shadow-2xl',
];

export const toShadow = (depth: Depth): string => {
  if (typeof depth === 'string') return toShadow(parseInt(depth, 10));
  return shadows[depth];
};
