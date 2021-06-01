<template>
  <v-button v-bind="$attrs" v-on="$attrs" @click="signIn">
    <slot />
  </v-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VButton from '../VButton';
import { signIn } from './helpers';

export default defineComponent({
  components: { VButton },
  setup: () => ({
    signIn,
  }),
});
</script>
