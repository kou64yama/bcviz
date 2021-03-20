<template>
  <main class="main">
    <slot />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style scoped>
.main {
  padding-top: 3rem;
  min-height: 100%;
  box-sizing: border-box;
}
</style>
