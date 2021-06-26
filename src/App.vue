<template>
  <context-provider>
    <router-view />
  </context-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContextProvider from './components/ContextProvider';

export default defineComponent({
  name: 'App',
  components: { ContextProvider },
});
</script>

<style lang="postcss">
html,
body {
  @apply h-full;
}

#app {
  @apply min-h-screen;
}

a {
  @apply underline text-blue-600 hover:text-blue-800;
}
</style>
