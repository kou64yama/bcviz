<template>
  <div class="relative">
    <hr
      class="border-t border-gray-400 border-solid absolute inset-x-0 bottom-0"
    />
    <hr
      class="border-t-2 border-blue-600 border-solid transform-gpu transition-transform origin-center"
      :class="{ 'scale-x-100': active, 'scale-x-0': !active }"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    active: { type: Boolean, required: true },
  },
});
</script>
