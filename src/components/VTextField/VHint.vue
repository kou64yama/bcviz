<template>
  <div v-if="isShown">
    {{ hint }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useHint } from './useHint';

export default defineComponent({
  props: {
    active: { type: Boolean, required: true },
    hint: { type: String as PropType<string | undefined>, default: undefined },
    persistentHint: { type: Boolean, required: true },
  },
  setup: (props) => useHint(props),
});
</script>
