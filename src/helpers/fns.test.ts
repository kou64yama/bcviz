import { first, number } from './fns';

describe(first, () => {
  test.each<[unknown, unknown[]]>([
    [1, [1, 2, 3]],
    ['foo', ['foo', 'bar']],
  ])(
    'returns the first element of the given array (expected=%j, input=%j)',
    (expected, input) => {
      expect(first(input)).toBe(expected);
    },
  );

  test.each([
    [1, 1],
    ['foo', 'foo'],
  ])(
    'returns the given value when the given value is not array (expected=%j, input=%j)',
    (expected, input) => {
      expect(first(input)).toBe(expected);
    },
  );

  test('returns undefined when the given array is an empty', () => {
    expect(first([])).toBeUndefined();
  });
});

describe(number, () => {
  test.each([
    [17, '17'],
    [-54, '-54'],
    [3.14, '3.14'],
    [1500, '1.5e3'],
    [Number.POSITIVE_INFINITY, 'Infinity'],
  ])(
    'parses the given string as a number (expected=%d, input=%s)',
    (expected, input) => {
      expect(number(input)).toBe(expected);
    },
  );

  test.each([
    [17, 17],
    [-54, -54],
    [3.14, 3.14],
    [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
  ])(
    'returns the value when the given value is a number (expected=%d, input=%d)',
    (expected, input) => {
      expect(number(input)).toBe(expected);
    },
  );

  test('returns undefined when the given value cannot be parsed as a number', () => {
    expect(number('foobar')).toBeUndefined();
  });
});
