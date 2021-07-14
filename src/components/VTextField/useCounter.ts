import { computed, DeepReadonly, Ref } from 'vue';

export interface CounterProps {
  counter: boolean | number | string;
  maxlength: number | string | undefined;
  value: string;
}

export interface Counter {
  isShown: DeepReadonly<Ref<boolean>>;
  maxLength: DeepReadonly<Ref<number>>;
  hasMaxLength: DeepReadonly<Ref<boolean>>;
  hasError: DeepReadonly<Ref<boolean>>;
}

export const useCounter = (props: CounterProps): Counter => {
  const isShown = computed(() => !!props.counter);
  const maxLength = computed(
    () =>
      parseInt(`${props.counter}`, 10) || parseInt(`${props.maxlength}`, 10),
  );
  const hasMaxLength = computed(() => Number.isFinite(maxLength.value));
  const hasError = computed(() => props.value.length > maxLength.value);

  return {
    isShown,
    maxLength,
    hasMaxLength,
    hasError,
  };
};
