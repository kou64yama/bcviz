import { InjectionKey } from 'vue';

export type InputIdGenerator = Generator<string>;

export const inputIdGenerator: InjectionKey<InputIdGenerator> = Symbol();

export const createInputIdGenerator = function* (): InputIdGenerator {
  while (true) {
    const random = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    yield `input-${random}`;
  }
};
