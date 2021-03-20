<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>
html,
body,
#app {
  height: 100%;
}

body {
  margin: 0;
  font: 16px/24px 'Helvetica Neue', 'Roboto', 'Arial', sans-serif;
  background-color: #f5f5f5;
  color: #424242;
}
</style>
