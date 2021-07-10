import * as vue from 'vue';
import { InputIdGenerator } from '../VApp/InputIdGenerator';
import { useInputId } from './useInputId';

jest.mock('vue');

const createMockedInputIdGenerator = function* (
  fn: () => string,
): InputIdGenerator {
  while (true) yield fn();
};

const idGenerator = jest.fn<string, []>();
const inject = vue.inject as jest.Mock;
const onMounted = vue.onMounted as jest.Mock;

test('throws an error when inputIdgenerator is not provided', () => {
  expect(() => useInputId()).toThrowError();
});

test('assigns undefined to inputId', () => {
  inject.mockReturnValue(createMockedInputIdGenerator(idGenerator));

  const { inputId } = useInputId();
  expect(inputId.value).toBeUndefined();
});

test('assigns the generated ID to inputId when mounted', () => {
  inject.mockReturnValue(createMockedInputIdGenerator(idGenerator));
  idGenerator.mockReturnValue('input-1');

  const { inputId } = useInputId();
  onMounted.mock.calls.forEach(([hook]) => hook());

  expect(inputId.value).toBe('input-1');
});

test('assigns the given ID to inputId', () => {
  inject.mockReturnValue(createMockedInputIdGenerator(idGenerator));

  const { inputId } = useInputId('given-id');
  expect(inputId.value).toBe('given-id');

  onMounted.mock.calls.forEach(([hook]) => hook());
  expect(inputId.value).toBe('given-id');
});
