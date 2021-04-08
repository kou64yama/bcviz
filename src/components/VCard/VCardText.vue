<template>
  <div class="cardText">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style scoped>
.cardText {
  padding: 1rem;
}
</style>
