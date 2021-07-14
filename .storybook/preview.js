import { addDecorator } from '@storybook/vue3';
import { defineComponent } from 'vue';
import VApp from '../src/components/VApp';

addDecorator(() =>
  defineComponent({
    inheritAttrs: false,
    components: { VApp },
    template: `
      <v-app>
        <story v-bind="$props" v-on="$props" />
      </v-app>
    `,
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
