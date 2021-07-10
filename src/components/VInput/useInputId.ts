import { DeepReadonly, inject, onMounted, readonly, ref, Ref } from 'vue';
import { inputIdGenerator } from '../VApp/InputIdGenerator';

export interface InputId {
  inputId: DeepReadonly<Ref<string | undefined>>;
}

export const useInputId = (id?: string): InputId => {
  const generator = inject(inputIdGenerator);
  if (!generator) throw new Error('no inputIdGenerator provided');

  const inputId = ref(id);

  onMounted(() => {
    if (inputId.value) return;

    const { value } = generator.next();
    inputId.value = value;
  });

  return {
    inputId: readonly(inputId),
  };
};
