<template>
  <v-elevation class="card" value="24">
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

<style scoped>
.card {
  background-color: #f5f5f5;
  border-radius: 0.25rem;
}
</style>
