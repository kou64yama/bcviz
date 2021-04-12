<template>
  <component
    :is="tag"
    class="elevation"
    :class="{
      [`elevation-${value}`]: true,
      [`focus-${focus || value}`]: true,
      [`active-${active || value}`]: true,
    }"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: { type: [Number, String], default: 0 },
    focus: { type: [Number, String], default: 0 },
    active: { type: [Number, String], default: 0 },
    tag: { type: String, default: 'div' },
  },
});
</script>

<style lang="postcss" scoped>
@for $i from 0 to 24 {
  .elevation-$i,
  .focus-$i:hover,
  .focus-$i:focus,
  .active-$i:active {
    box-shadow: 0rem
        calc($i * 11 / 576 * 1rem)
        calc($i * 15 / 576 * 1rem)
        calc($i * -7 / 576 * 1rem)
        rgba(0, 0, 0, 0.2),
      0rem
        calc($i * 24 / 576 * 1rem)
        calc($i * 38 / 576 * 1rem)
        calc($i * 3 / 576 * 1rem)
        rgba(0, 0, 0, 0.14),
      0rem
        calc($i * 9 / 576 * 1rem)
        calc($i * 46 / 576 * 1rem)
        calc($i * 8 / 576 * 1rem)
        rgba(0, 0, 0, 0.12);
  }
}

.elevation {
  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
