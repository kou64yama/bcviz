import { createInputIdGenerator } from './InputIdGenerator';

test('generates unique IDs', () => {
  jest
    .spyOn(Math, 'random')
    .mockReturnValueOnce(1 / Number.MAX_SAFE_INTEGER)
    .mockReturnValueOnce(2 / Number.MAX_SAFE_INTEGER)
    .mockReturnValueOnce(3 / Number.MAX_SAFE_INTEGER);

  const generator = createInputIdGenerator();
  expect(generator.next()).toStrictEqual({ value: 'input-1', done: false });
  expect(generator.next()).toStrictEqual({ value: 'input-2', done: false });
  expect(generator.next()).toStrictEqual({ value: 'input-3', done: false });
});
