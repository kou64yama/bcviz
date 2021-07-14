<template>
  <slot />
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue';
import { createInputIdGenerator, inputIdGenerator } from './InputIdGenerator';

export default defineComponent({
  setup: () => {
    provide(inputIdGenerator, createInputIdGenerator());
    return {};
  },
});
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
