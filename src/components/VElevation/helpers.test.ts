import { toStyle, validateDepth } from './helpers';

const depths = [0, 1, 2, 3, 4, 5, '0', '1', '2', '3', '4', '5'];

describe(validateDepth, () => {
  test.each(depths)('returns true for valid depth (%j)', (depth) => {
    const result = validateDepth(depth);
    expect(result).toBeTruthy();
  });

  test.each([-1, -2, -3, 6, 7, 8, 0.5, '-1', '-2', '-3', '6', '7', '8', '0.5'])(
    'returns false for invalid depth (%j)',
    (depth) => {
      const result = validateDepth(depth);
      expect(result).toBeFalsy();
    },
  );
});

describe(toStyle, () => {
  test.each([...depths])('returns classes for %j', (depth) => {
    const result = toStyle(depth);
    expect(result.zIndex).toMatch(/^z-\d+$/);
    expect(result.shadow).toMatch(/^shadow(-.+)?$/);
  });
});
