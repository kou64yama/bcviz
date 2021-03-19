<template>
  <main class="error">
    <div class="container">
      <h1 v-text="error.message" />
      <p v-if="error.statusCode === 404">
        Sorry, the page you were trying to view does not exist.
      </p>
      <div>
        <a href="#" @click.prevent="back">Back</a>
      </div>
      <div>
        <router-link to="/"> Go to the top page </router-link>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    error: { type: Error, default: () => new Error() },
  },
});
</script>

<style scoped>
.error {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  padding: 1rem;
}
</style>
