import { PropType } from 'vue';
import { inputProps } from './helpers';

test.each<[PropType<unknown>]>([[Boolean], [Number], [String]])(
  'modelValue.type is %s',
  (type) => {
    const props = inputProps(type);
    expect(props.modelValue.type).toBe(type);
  },
);
