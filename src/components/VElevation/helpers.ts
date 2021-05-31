import { PropType } from '@vue/runtime-core';

export type Depth = number | string;
export const depthType = [Number, String] as PropType<Depth>;

export const validator = (depth: Depth): boolean => {
  if (typeof depth === 'string') return validator(parseInt(depth, 10));
  return Number.isInteger(depth) && 0 <= depth && depth <= 5;
};

const shadows = [
  'shadow-none',
  'shadow-sm',
  'shadow',
  'shadow-lg',
  'shadow-xl',
  'shadow-2xl',
];

export const valueToShadow = (depth: Depth): string => {
  if (typeof depth === 'string') return valueToShadow(parseInt(depth, 10));
  return shadows[depth];
};
