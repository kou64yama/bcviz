<template>
  <v-button v-bind="$attrs" v-on="$attrs" @click="signOut">
    <slot />
  </v-button>
</template>

<script lang="ts">
import firebase from 'firebase/app';
import { defineComponent } from 'vue';
import VButton from '../VButton';

export default defineComponent({
  components: { VButton },
  setup: () => {
    const signOut = () => firebase.auth().signOut();
    return {
      signOut,
    };
  },
});
</script>
