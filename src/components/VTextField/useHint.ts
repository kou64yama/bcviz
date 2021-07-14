import { computed, DeepReadonly, Ref } from '@vue/runtime-core';

export interface HintProps {
  active: boolean;
  hint: string | undefined;
  persistentHint: boolean;
}

export interface Hint {
  isShown: DeepReadonly<Ref<boolean>>;
}

export const useHint = (props: HintProps): Hint => {
  const isShown = computed(
    () => props.hint !== undefined && (props.active || props.persistentHint),
  );
  return {
    isShown,
  };
};
