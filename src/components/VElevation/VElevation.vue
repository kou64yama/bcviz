<template>
  <component :is="tag" :class="`${toZIndex(depth)} ${toShadow(depth)}`">
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { depthType, validator, toShadow, toZIndex } from './helpers';

export default defineComponent({
  props: {
    depth: { type: depthType, default: 0, validator },
    tag: { type: String, default: 'div' },
  },
  setup: () => ({
    toShadow,
    toZIndex,
  }),
});
</script>
