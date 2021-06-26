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
import { defineComponent, toRefs, watch, onMounted } from 'vue';
import VOverlay from '../VOverlay';
import { makeOverflowSwitcher } from './helpers';

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
    const switcher = makeOverflowSwitcher();
    onMounted(switcher.init);
    watch(modelValue, switcher.switch);
  },
});
</script>
