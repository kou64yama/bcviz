<template>
  <v-elevation
    tag="header"
    class="inset-x-0 h-12 flex items-center bg-blue-600 text-white"
    :class="{ fixed }"
    depth="3"
  >
    <slot />
  </v-elevation>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VElevation from '../VElevation';

export default defineComponent({
  components: { VElevation },
  props: {
    fixed: { type: Boolean, default: false },
  },
});
</script>

<style lang="postcss" scoped>
:deep(> *) {
  @apply px-2;
}

:deep(> a) {
  @apply font-bold no-underline text-white opacity-95 hover:text-white hover:opacity-100;
}
</style>
