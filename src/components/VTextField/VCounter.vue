<template>
  <div v-if="isShown" :class="{ 'text-red-500': hasError }">
    {{ value.length }}
    <template v-if="hasMaxLength">/ {{ maxLength }}</template>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useCounter } from './useCounter';

export default defineComponent({
  props: {
    counter: { type: [Boolean, Number, String], required: true },
    maxlength: {
      type: [Number, String] as PropType<number | string | undefined>,
      default: undefined,
    },
    value: { type: String, required: true },
  },
  setup: (props) => useCounter(props),
});
</script>
