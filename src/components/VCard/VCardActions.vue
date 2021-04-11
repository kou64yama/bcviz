<template>
  <div class="cardActions">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style scoped>
.cardActions {
  padding: 0 1rem 1rem 1rem;
  display: flex;
  justify-content: flex-end;
}

.cardActions > :deep(*) {
  margin: 0 0.25rem;
}

.cardActions > :deep(*:first-child) {
  margin-left: 0;
}

.cardActions > :deep(*:last-child) {
  margin-right: 0;
}
</style>
