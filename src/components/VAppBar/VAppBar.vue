<template>
  <v-elevation tag="header" class="appBar" value="4">
    <slot />
  </v-elevation>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VElevation from '../VElevation';

export default defineComponent({
  components: { VElevation },
});
</script>

<style lang="postcss" scoped>
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

.appBar > :deep(*) {
  margin: 0 0.5rem;
}

.appBar > :deep(a) {
  color: inherit;
  text-decoration: inherit;
  font-weight: bold;
}
</style>
