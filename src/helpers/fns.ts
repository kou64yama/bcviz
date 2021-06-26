/**
 * Returns first element of then given array.
 *
 * If the given array is empty, returns `undefined`.
 * If the argument is not an array, returns its value.
 *
 * @param value The array
 * @returns The first element
 */
export const first = <T>(value: T | T[]): T | undefined =>
  Array.isArray(value) ? value[0] : value;

/**
 * Parses the given value to a numeric type.
 *
 * If the argument cannot be parsed, returns `undefined`.
 *
 * @param value The value
 * @returns The parsed value
 */
export const number = <T>(value: T): number | undefined => {
  const num = Number(value);
  return !Number.isNaN(num) ? num : undefined;
};
