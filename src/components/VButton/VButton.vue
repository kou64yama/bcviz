<template>
  <v-elevation
    class="inline-flex items-center justify-center py-2 px-4 rounded relative"
    :class="{
      'bg-blue-600': !text && !outlined,
      'cursor-pointer': !disabled,
    }"
    :disabled="disabled"
    :depth="text || depressed || outlined ? 0 : 2"
  >
    <span
      class="uppercase font-bold"
      :class="{
        'text-white': !text && !outlined,
        'opacity-95': !text && !outlined,
        'opacity-70': text || outlined,
      }"
    >
      <slot />
    </span>
    <div
      class="absolute inset-0 hover:opacity-10 active:opacity-20 rounded-sm"
      :class="{
        'hover:bg-white': !text && !outlined,
        'hover:bg-black': text || outlined,
      }"
    />
  </v-elevation>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VElevation from '../VElevation';

export default defineComponent({
  components: { VElevation },
  props: {
    depressed: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    outlined: { type: Boolean, default: false },
    text: { type: Boolean, default: false },
  },
});
</script>
