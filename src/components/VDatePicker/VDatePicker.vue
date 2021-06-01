<template>
  <input
    class="border border-gray-400 rounded px-2 w-40 h-12"
    type="date"
    :value="modelValue"
    @input="(event) => $emit('update:modelValue', event.target.value)"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    modelValue: { type: String, default: null },
  },
  emits: ['update:modelValue'],
});
</script>
