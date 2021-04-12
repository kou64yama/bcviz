<template>
  <div class="cardTitle">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="postcss" scoped>
.cardTitle {
  padding: 1rem 1rem 0 1rem;
  font-weight: bold;
}
</style>
