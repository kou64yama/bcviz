<template>
  <teleport to="#dialogs">
    <div v-if="open" class="overlay z-40" @click="$emit('update:open', !open)">
      <div class="dialog" @click.stop>
        <slot />
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { watch, toRefs, defineComponent } from 'vue';

export default defineComponent({
  props: {
    open: { type: Boolean, default: false },
  },
  emits: ['update:open'],
  setup: (props) => {
    const { open } = toRefs(props);

    let overflow = '';

    watch(open, (value) => {
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

<style lang="postcss" scoped>
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.dialog {
  width: 100%;
  max-width: 32rem;
}
</style>
