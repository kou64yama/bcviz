<template>
  <v-elevation class="bg-white rounded-sm" :depth="elevation">
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
