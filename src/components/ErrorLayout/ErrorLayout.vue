<template>
  <div class="container mx-auto min-h-screen flex items-center justify-center">
    <div>
      <h1 class="text-5xl mb-8" v-text="error.message" />
      <p v-if="error.statusCode === 404">
        Sorry, the page you were trying to view does not exist.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface StatusCode {
  statusCode: number;
}

export default defineComponent({
  props: {
    error: {
      type: Error as PropType<Error & Partial<StatusCode>>,
      default: () => new Error(),
    },
  },
});
</script>
