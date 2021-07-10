import { reactive } from 'vue';
import { TextFieldProps, useTextField } from './useTextField';

const defaultProps: TextFieldProps = {
  id: undefined,
  modelValue: undefined,
};

const nextTick = () => new Promise(setImmediate);

test.each([
  ['', undefined],
  ['foo', 'foo'],
])('value is %j when modelValue is %j', (expected, modelValue) => {
  const props = reactive<TextFieldProps>({
    ...defaultProps,
    modelValue,
  });
  const { value } = useTextField(props);
  expect(value.value).toBe(expected);
});

test.each([
  ['', undefined, 'foo'],
  ['foo', 'foo', undefined],
])(
  'value is %j when modelValue is changed %j from %j',
  async (expected, newValue, initialValue) => {
    const props = reactive<TextFieldProps>({
      ...defaultProps,
      modelValue: initialValue,
    });
    const { value } = useTextField(props);

    props.modelValue = newValue;
    await nextTick();
    expect(value.value).toBe(expected);
  },
);

test.each([
  [false, false, ''],
  [true, true, ''],
  [true, true, 'test'],
  [true, false, 'test'],
])(
  'minimized is %s when active is %s and value is %j',
  (expected, active, inputValue) => {
    const props = reactive<TextFieldProps>(defaultProps);
    const { minimized, value, setActive } = useTextField(props);
    setActive(active);
    value.value = inputValue;
    expect(minimized.value).toBe(expected);
  },
);
