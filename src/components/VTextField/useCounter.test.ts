import { CounterProps, useCounter } from './useCounter';

const defaultProps: CounterProps = {
  counter: false,
  maxlength: undefined,
  value: '',
};

test.each([
  [true, true],
  [true, 10],
  [true, '10'],
  [false, false],
  [false, ''],
  [false, 0],
])('isShown is %s when the counter property is %j', (expected, counter) => {
  const { isShown } = useCounter({
    ...defaultProps,
    counter,
  });
  expect(isShown.value).toBe(expected);
});

test.each([
  [10, { counter: false, maxlength: 10 }],
  [10, { counter: false, maxlength: '10' }],
  [10, { counter: 10, maxlength: undefined }],
  [10, { counter: '10', maxlength: undefined }],
])(
  'maxLength is %d and hasMaxLength is true when props = %j',
  (expected, props) => {
    const { maxLength, hasMaxLength } = useCounter({
      ...props,
      value: '',
    });
    expect(maxLength.value).toBe(expected);
    expect(hasMaxLength.value).toBeTruthy();
  },
);

test.each([
  [{ counter: false, maxlength: 'invalid' }],
  [{ counter: false, maxlength: Number.POSITIVE_INFINITY }],
  [{ counter: 'invalid', maxlength: undefined }],
  [{ counter: Number.POSITIVE_INFINITY, maxlength: undefined }],
])('maxLength is NaN and hasMaxLength is false when props = %j', (props) => {
  const { maxLength, hasMaxLength } = useCounter({
    ...props,
    value: '',
  });
  expect(maxLength.value).toBeNaN();
  expect(hasMaxLength.value).toBeFalsy();
});

test.each([
  [false, 9],
  [false, 10],
  [true, 11],
  [true, 12],
])(
  'hasError is %s when the length of value is %d (<=10)',
  (expected, length) => {
    const { hasError } = useCounter({
      counter: 10,
      maxlength: undefined,
      value: '*'.repeat(length),
    });
    expect(hasError.value).toBe(expected);
  },
);
