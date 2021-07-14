import { computed, ComputedRef, ref, Ref, toRefs, watch } from 'vue';
import { Active, useActive } from './useActive';

export interface TextFieldProps {
  id: string | undefined;
  modelValue: string | undefined;
}

export interface TextField extends Active {
  value: Ref<string>;
  minimized: ComputedRef<boolean>;
}

export const useTextField = (props: TextFieldProps): TextField => {
  const { modelValue } = toRefs(props);
  const { active, setActive } = useActive();
  const value = ref(modelValue.value ?? '');
  const minimized = computed(() => active.value || value.value.length > 0);

  watch(modelValue, (newValue) => (value.value = newValue ?? ''));

  return {
    value,
    active,
    minimized,
    setActive,
  };
};
