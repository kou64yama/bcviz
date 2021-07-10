import { useHint } from './useHint';

test('is not shown when props.hint is undefined', () => {
  const { isShown } = useHint({
    active: true,
    hint: undefined,
    persistentHint: true,
  });
  expect(isShown.value).toBeFalsy();
});

test('is not shown when props.active = false and props.persistentHint = false', () => {
  const { isShown } = useHint({
    active: false,
    hint: 'test',
    persistentHint: false,
  });
  expect(isShown.value).toBeFalsy();
});

test.each([
  [true, false],
  [false, true],
])(
  'is shown when props.active = %s and props.persistentHint = %s',
  (active, persistentHint) => {
    const { isShown } = useHint({
      active,
      hint: 'test',
      persistentHint,
    });
    expect(isShown.value).toBeTruthy();
  },
);
