<template>
  <footer class="footer">
    <slot />
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style scoped>
.footer {
  padding: 0 1rem;
}
</style>
