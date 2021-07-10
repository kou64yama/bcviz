import { PropType } from 'vue';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const inputProps = <T extends unknown>(
  type: PropType<T> | true | null,
) => ({
  hint: { type: String as PropType<string | undefined>, default: undefined },
  label: { type: String as PropType<string | undefined>, default: undefined },
  modelValue: { type: type as PropType<T | undefined>, default: undefined },
  prefix: { type: String as PropType<string | undefined>, default: undefined },
  suffix: { type: String as PropType<string | undefined>, default: undefined },
});
