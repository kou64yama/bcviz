<template>
  <button class="button" :class="{ flat }">
    <div class="inner">
      <slot />
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    flat: { type: Boolean, default: false },
  },
});
</script>

<style scoped>
.button {
  display: inline-flex;
  background-color: #424242;
  color: #ffffff;
  border-radius: 0.125rem;
  cursor: pointer;
  font: inherit;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  position: relative;
  margin: 0;
  padding: 0;
}

.button:hover::before,
.button:focus::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 0.125rem;
  background-color: rgba(255, 255, 255, 0.125);
}

.flat:hover::before,
.flat:focus::before {
  background-color: rgba(0, 0, 0, 0.125);
}

.button:hover,
.button:focus {
  outline: none;
}

.flat {
  background-color: transparent;
  color: inherit;
}

.inner {
  height: 2.25rem;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
}
</style>
