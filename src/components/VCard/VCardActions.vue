<template>
  <div class="cardActions">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="postcss" scoped>
.cardActions {
  padding: 0 1rem 1rem 1rem;
  display: flex;
  justify-content: flex-end;
}

.cardActions > :deep(*:not(:first-child)) {
  margin-left: 0.25rem;
}

.cardActions > :deep(*:not(:last-child)) {
  margin-right: 0.25rem;
}
</style>
