<template>
  <component :is="tag" :class="{ [style.shadow]: true, [style.zIndex]: true }">
    <slot />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { toStyle, validateDepth } from './helpers';

export default defineComponent({
  props: {
    depth: { type: [Number, String], default: 0, validateDepth },
    tag: { type: String, default: 'div' },
  },
  setup: (props) => ({
    style: computed(() => toStyle(props.depth)),
  }),
});
</script>
