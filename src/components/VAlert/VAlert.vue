<template>
  <div class="alert">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style scoped>
.alert {
  padding: 1rem;
  background-color: #ff9800;
  color: #ffffff;
}
</style>
