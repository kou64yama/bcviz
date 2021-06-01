<template>
  <component
    :is="tag"
    class="elevation"
    :class="{
      [`z-${depth}0`]: true,
      [valueToShadow(depth)]: true,
    }"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { depthType, validator, valueToShadow } from './helpers';

export default defineComponent({
  props: {
    depth: { type: depthType, default: 0, validator },
    tag: { type: String, default: 'div' },
  },
  setup: () => ({
    valueToShadow,
  }),
});
</script>
