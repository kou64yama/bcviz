import { DeepReadonly, readonly, ref, Ref } from 'vue';

export interface Active {
  active: DeepReadonly<Ref<boolean>>;
  setActive(value: boolean): void;
}

export const useActive = (): Active => {
  const active = ref(false);
  return {
    active: readonly(active),
    setActive: (value) => (active.value = value),
  };
};
