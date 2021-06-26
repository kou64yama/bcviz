<template>
  <div
    class="flex justify-center items-center border-4 border-gray-200 border-dashed rounded-2xl bg-gray-50 text-gray-400 h-64 text-3xl"
    :class="{ 'bg-gray-100': dropMode }"
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
import { onFileList } from './helpers';

export default defineComponent({
  emits: {
    'drop:files': (files: FileList) => files instanceof FileList,
  },
  setup: (_, { emit }) => {
    const dropMode = ref(false);
    const onDrop = onFileList(emit.bind(null, 'drop:files'));
    return { dropMode, onDrop };
  },
});
</script>
