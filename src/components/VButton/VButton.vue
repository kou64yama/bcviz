<template>
  <v-elevation
    class="button"
    :class="{ flat, outlined, disabled }"
    :disabled="disabled"
    :value="flat || depressed || outlined ? 0 : 2"
    :focus="flat || depressed || outlined ? 0 : 4"
    :active="flat || depressed || outlined ? 0 : 8"
  >
    <div class="inner">
      <slot />
    </div>
  </v-elevation>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VElevation from '../VElevation';

export default defineComponent({
  components: { VElevation },
  props: {
    disabled: { type: Boolean, default: false },
    flat: { type: Boolean, default: false },
    depressed: { type: Boolean, default: false },
    outlined: { type: Boolean, default: false },
  },
});
</script>

<style lang="postcss" scoped>
.button {
  display: inline-flex;
  background-color: #424242;
  color: #ffffff;
  border-radius: 0.125rem;
  font: inherit;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  position: relative;
  margin: 0;
  padding: 0;
}

.button:not(.disabled) {
  cursor: pointer;
}

.button:not(.disabled):hover::before,
.button:not(.disabled):focus::before {
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

.flat:not(.disabled):hover::before,
.flat:not(.disabled):focus::before {
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

.outlined {
  background-color: transparent;
  color: #424242;
  border: 1px solid #bdbdbd;
}

.disabled {
  background-color: #bdbdbd;
}

.inner {
  height: 2.25rem;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
}
</style>
