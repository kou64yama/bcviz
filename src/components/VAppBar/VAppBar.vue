<template>
  <header class="appBar">
    <slot />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style scoped>
.appBar {
  background-color: #424242;
  color: #fff;
  height: 3rem;
  padding: 0 0.5rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  z-index: 1;
}

:slotted(.appBar > *) {
  margin: 0 0.5rem;
}

:slotted(a) {
  color: inherit;
  text-decoration: inherit;
  font-weight: bold;
}
</style>
