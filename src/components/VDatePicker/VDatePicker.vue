<template>
  <input
    class="datePicker"
    type="date"
    :value="modelValue"
    @input="(event) => $emit('update:modelValue', event.target.value)"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    modelValue: { type: String, default: null },
  },
  emits: ['update:modelValue'],
});
</script>

<style scoped>
.datePicker {
  font: inherit;
  border: 1px solid #bdbdbd;
  height: 2rem;
  width: 11.5rem;
  padding: 0 0.5rem 0 2rem;
  box-sizing: border-box;
}

.datePicker:hover,
.datePicker:focus {
  outline: none;
}
</style>
