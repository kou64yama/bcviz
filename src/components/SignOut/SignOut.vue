<template>
  <v-button v-bind="$attrs" v-on="$attrs" @click="signOut">
    <slot />
  </v-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VButton from '../VButton';
import { signOut } from './helpers';

export default defineComponent({
  components: { VButton },
  setup: () => ({
    signOut,
  }),
});
</script>
