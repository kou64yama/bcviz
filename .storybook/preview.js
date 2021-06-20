import { addDecorator } from '@storybook/vue3';
import { defineComponent } from 'vue';
import ContextProvider from '../src/components/ContextProvider';

addDecorator(() =>
  defineComponent({
    components: { ContextProvider },
    template: `<context-provider><story /></context-provider>`,
  }),
);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
