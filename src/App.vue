<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body {
  @apply h-full;
}

#app {
  @apply min-h-screen;
}
</style>
