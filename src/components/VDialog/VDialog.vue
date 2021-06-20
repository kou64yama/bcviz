<template>
  <v-overlay
    :model-value="modelValue"
    @click="$emit('update:modelValue', !modelValue)"
  >
    <div class="w-full max-w-lg" @click.stop>
      <slot />
    </div>
  </v-overlay>
</template>

<script lang="ts">
import { defineComponent, toRefs, watch } from 'vue';
import VOverlay from '../VOverlay';

export default defineComponent({
  components: {
    VOverlay,
  },
  props: {
    modelValue: { type: Boolean, default: false },
  },
  emits: ['update:modelValue'],
  setup: (props) => {
    const { modelValue } = toRefs(props);

    let overflow = '';

    watch(modelValue, (value) => {
      if (value) {
        overflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = overflow;
      }
    });
  },
});
</script>
