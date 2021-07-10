<template>
  <div class="flex items-baseline">
    <div>
      <slot name="prepend" />
    </div>
    <div class="flex-1">
      <div class="text-xs text-gray-500">
        <slot name="label">
          {{ label }}
        </slot>
      </div>
      <div>
        <slot />
      </div>
      <div class="h-4 text-xs text-gray-500">
        <slot name="message">
          {{ hint }}
        </slot>
      </div>
    </div>
    <div>
      <slot name="append" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { inputProps } from './helpers';

export default defineComponent({
  props: inputProps<unknown>(true),
});
</script>
