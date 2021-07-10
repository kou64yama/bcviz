<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import VApp from './components/VApp/VApp.vue';

export default defineComponent({
  name: 'App',
  components: { VApp },
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
