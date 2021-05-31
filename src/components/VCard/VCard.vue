<template>
  <v-elevation class="card" :depth="elevation">
    <slot />
  </v-elevation>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VElevation from '../VElevation';

export default defineComponent({
  components: { VElevation },
  props: {
    elevation: { type: [String, Number], default: 2 },
  },
});
</script>

<style lang="postcss" scoped>
.card {
  background-color: #ffffff;
  border-radius: 0.125rem;
}
</style>
