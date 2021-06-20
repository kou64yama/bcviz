<template>
  <div
    class="fileDrop"
    :class="{ dropMode }"
    @dragenter.stop.prevent="dropMode = true"
    @dragleave.stop.prevent="dropMode = false"
    @dragover.stop.prevent
    @drop.stop.prevent="onDrop"
  >
    Drop here!
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  emits: ['drop:files'],
  setup: (_props, { emit }) => {
    const dropMode = ref(false);

    const onDrop = (event: DragEvent) => {
      dropMode.value = false;
      if (!event.dataTransfer) return;

      emit('drop:files', event.dataTransfer.files);
    };
    return { dropMode, onDrop };
  },
});
</script>

<style lang="postcss" scoped>
.fileDrop {
  height: 16rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.25rem dashed #e0e0e0;
  border-radius: 1rem;
  background-color: #f5f5f5;
  color: #9e9e9e;
  font-size: 2rem;
  line-height: 3rem;
}

.dropMode {
  background-color: #eeeeee;
}
</style>
