<template>
  <v-input :model-value="value">
    <template #prepend>
      <slot name="prepend" />
    </template>
    <template #append>
      <slot name="append" />
    </template>
    <template #message>
      <slot name="message">
        <div class="flex mt-1">
          <v-hint
            :active="active"
            :hint="hint"
            :persistent-hint="persistentHint"
          />
          <div class="flex-1" />
          <v-counter :counter="counter" :maxlength="maxlength" :value="value" />
        </div>
      </slot>
    </template>
    <div class="relative flex items-baseline pt-4">
      <div
        v-if="prefix"
        class="nowrap mr-1"
        :class="{ 'text-blue-600': active }"
        v-text="prefix"
      />
      <div class="flex-1">
        <label
          :for="inputId"
          class="absolute select-none inline-flex items-baseline py-1 transform-gpu transition-transform origin-left"
          :class="{
            'text-gray-500': !active,
            'text-blue-600': active,
            'scale-75': minimized,
            '-translate-y-5': minimized,
            'left-0': minimized,
          }"
          @click="setActive(true)"
        >
          <slot name="label">
            {{ label }}
          </slot>
        </label>
        <input
          v-bind="{
            ...$attrs,
            placeholder: !label || minimized ? placeholder : undefined,
          }"
          :id="inputId"
          v-model="value"
          class="w-full py-1 bg-transparent focus:outline-none"
          :maxlength="maxlength"
          :type="type"
          @focus="setActive(true)"
          @blur="setActive(false)"
          @input="$emit('update:modelValue', $event.target.value)"
        />
      </div>
      <div
        v-if="suffix"
        class="nowrap ml-1"
        :class="{ 'text-blue-600': active }"
        v-text="suffix"
      />
    </div>
    <v-underline :active="active" />
  </v-input>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import VInput, { inputProps, useInputId } from '../VInput';
import { useTextField } from './useTextField';
import VCounter from './VCounter.vue';
import VHint from './VHint.vue';
import VUnderline from './VUnderline.vue';

export default defineComponent({
  components: { VCounter, VHint, VInput, VUnderline },
  inheritAttrs: false,
  props: {
    ...inputProps(String),
    counter: { type: [Boolean, Number, String], default: false },
    id: { type: String as PropType<string | undefined>, default: undefined },
    maxlength: {
      type: [Number, String] as PropType<number | string | undefined>,
      default: undefined,
    },
    persistentHint: { type: Boolean, default: false },
    placeholder: {
      type: String as PropType<string | undefined>,
      default: undefined,
    },
    type: { type: String, default: 'text' },
  },
  emits: {
    'update:modelValue': (value: string) => typeof value === 'string',
  },
  setup: (props) => ({
    ...useInputId(props.id),
    ...useTextField(props),
  }),
});
</script>
