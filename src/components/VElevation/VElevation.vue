<template>
  <component
    :is="tag"
    class="elevation"
    :class="{
      [`elevation-${value}`]: true,
      [`focus-${focus || value}`]: true,
      [`active-${active || value}`]: true,
    }"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: { type: [Number, String], default: 0 },
    focus: { type: [Number, String], default: 0 },
    active: { type: [Number, String], default: 0 },
    tag: { type: String, default: 'div' },
  },
});
</script>

<style scoped>
.elevation {
  transition: box-shadow cubic-bezier(0.77, 0, 0.175, 1);
}
.elevation-1,
.focus-1:hover,
.focus-1:focus,
.active-1:active {
  box-shadow: 0 0 0.125rem rgba(0, 0, 0, 0.5);
}
.elevation-2,
.focus-2:hover,
.focus-2:focus,
.active-2:active {
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5);
}
.elevation-3,
.focus-3:hover,
.focus-3:focus,
.active-3:active {
  box-shadow: 0 0 0.375rem rgba(0, 0, 0, 0.5);
}
.elevation-4,
.focus-4:hover,
.focus-4:focus,
.active-4:active {
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
}
.elevation-5,
.focus-5:hover,
.focus-5:focus,
.active-5:active {
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.5);
}
.elevation-6,
.focus-6:hover,
.focus-6:focus,
.active-6:active {
  box-shadow: 0 0 0.75rem rgba(0, 0, 0, 0.5);
}
.elevation-7,
.focus-7:hover,
.focus-7:focus,
.active-7:active {
  box-shadow: 0 0 0.875rem rgba(0, 0, 0, 0.5);
}
.elevation-8,
.focus-8:hover,
.focus-8:focus,
.active-8:active {
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
}
.elevation-9,
.focus-9:hover,
.focus-9:focus,
.active-9:active {
  box-shadow: 0 0 1.125rem rgba(0, 0, 0, 0.5);
}
.elevation-10,
.focus-10:hover,
.focus-10:focus,
.active-10:active {
  box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.5);
}
.elevation-11,
.focus-11:hover,
.focus-11:focus,
.active-11:active {
  box-shadow: 0 0 1.375rem rgba(0, 0, 0, 0.5);
}
.elevation-12,
.focus-12:hover,
.focus-12:focus,
.active-12:active {
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.5);
}
.elevation-13,
.focus-13:hover,
.focus-13:focus,
.active-13:active {
  box-shadow: 0 0 1.625rem rgba(0, 0, 0, 0.5);
}
.elevation-14,
.focus-14:hover,
.focus-14:focus,
.active-14:active {
  box-shadow: 0 0 1.75rem rgba(0, 0, 0, 0.5);
}
.elevation-15,
.focus-15:hover,
.focus-15:focus,
.active-15:active {
  box-shadow: 0 0 1.875rem rgba(0, 0, 0, 0.5);
}
.elevation-16,
.focus-16:hover,
.focus-16:focus,
.active-16:active {
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);
}
.elevation-17,
.focus-17:hover,
.focus-17:focus,
.active-17:active {
  box-shadow: 0 0 2.125rem rgba(0, 0, 0, 0.5);
}
.elevation-18,
.focus-18:hover,
.focus-18:focus,
.active-18:active {
  box-shadow: 0 0 2.25rem rgba(0, 0, 0, 0.5);
}
.elevation-19,
.focus-19:hover,
.focus-19:focus,
.active-19:active {
  box-shadow: 0 0 2.375rem rgba(0, 0, 0, 0.5);
}
.elevation-20,
.focus-20:hover,
.focus-20:focus,
.active-20:active {
  box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.5);
}
.elevation-21,
.focus-21:hover,
.focus-21:focus,
.active-21:active {
  box-shadow: 0 0 2.625rem rgba(0, 0, 0, 0.5);
}
.elevation-22,
.focus-22:hover,
.focus-22:focus,
.active-22:active {
  box-shadow: 0 0 2.75rem rgba(0, 0, 0, 0.5);
}
.elevation-23,
.focus-23:hover,
.focus-23:focus,
.active-23:active {
  box-shadow: 0 0 2.875rem rgba(0, 0, 0, 0.5);
}
.elevation-24,
.focus-24:hover,
.focus-24:focus,
.active-24:active {
  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.5);
}
</style>
