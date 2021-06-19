<template>
  <teleport to="#overlay">
    <div
      v-bind="$attrs"
      class="z-40 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      :class="{ hidden: !modelValue }"
    >
      <slot />
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    modelValue: { type: Boolean, default: false },
  },
  emits: ['click'],
});
</script>
