import { Annotations, Args, ArgTypes } from '@storybook/addons';
import { Meta, Story } from '@storybook/vue3';
import VTextField from '.';

const meta: Meta = {
  title: 'components/VTextField',
  component: VTextField,
};

const Template: Story = (args) => ({
  template: `<v-text-field v-bind="$props" v-on="$props" />`,
  components: { VTextField },
  props: Object.keys(args),
});

const argTypes: ArgTypes = {
  counter: {
    type: 'number',
  },
  hint: {
    type: 'string',
  },
  label: {
    description: 'Sets input label',
    type: 'string',
    table: {
      type: { summary: 'string | undefined' },
      defaultValue: { summary: 'undefined' },
    },
  },
  modelValue: {
    description: 'The input’s value',
    type: 'string',
    table: {
      type: { summary: 'string | undefined' },
      defaultValue: { summary: 'undefined' },
    },
  },
  placeholder: {
    description: 'Sets the input’s placeholder text',
    type: 'string',
    table: {
      type: { summary: 'string | undefined' },
      defaultValue: { summary: 'undefined' },
    },
  },
  type: {
    description: 'Sets input type',
    type: 'string',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '"text"' },
    },
  },
  onInput: {
    description: 'The updated bound model',
    action: 'input',
  },
};

export const API = Object.assign<Story, Annotations<Args, unknown>>(
  Template.bind({}),
  {
    argTypes,
  },
);

export const Usage: Story = () => ({
  template: `
    <div class="flex gap-4">
      <div class="flex-1">
        <v-text-field label="Regular" />
      </div>
      <div class="flex-1">
        <v-text-field label="Regular" placeholder="Placeholder" />
      </div>
    </div>
  `,
  components: { VTextField },
});

export const Hint: Story = () => ({
  template: `
    <div class="flex gap-4">
      <div class="flex-1">
        <v-text-field
          hint="For example, flowers or used cars"
          label="Your product or service"
          model-value="Grocery delivery"
        />
      </div>
      <div class="flex-1">
        <v-text-field
          hint="For example, flowers or used cars"
          label="Your product or service"
          model-value="Grocery delivery"
          persistent-hint
        />
      </div>
    </div>
  `,
  components: { VTextField },
});

export const SuffixesAndPrefixes: Story = () => ({
  template: `
    <v-text-field
      label="Amount"
      model-value="10.00"
      prefix="$"
    />
    <v-text-field
      label="Weight"
      model-value="28.00"
      suffix="lbs"
    />
    <v-text-field
      label="Email address"
      model-value="example"
      suffix="@gmail.com"
    />
    <v-text-field
      label="Label Text"
      model-value="12:30:00"
      suffix="PST"
      type="time"
    />
  `,
  components: { VTextField },
});

export const Counter: Story = () => ({
  template: `
    <div class="flex gap-4">
      <div class="flex-1">
        <v-text-field
          counter="25"
          hint="This field uses counter prop"
          label="Regular"
          model-value="Preliminary report"
        />
      </div>
      <div class="flex-1">
        <v-text-field
          counter
          hint="This field uses maxlength attribute"
          label="Limit exceeded"
          maxlength="25"
          model-value="California is a state in the western United States"
        />
      </div>
    </div>
  `,
  components: { VTextField },
});

export default meta;
