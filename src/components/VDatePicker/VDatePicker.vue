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
  border: 1px solid #ccc;
  height: 2rem;
  box-sizing: border-box;
}

.datePicker:hover,
.datePicker:focus {
  outline: none;
}
</style>
