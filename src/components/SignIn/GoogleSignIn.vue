<template>
  <v-button v-bind="$attrs" v-on="$attrs" @click="signIn">
    <slot />
  </v-button>
</template>

<script lang="ts">
import firebase from 'firebase';
import { defineComponent } from 'vue';
import VButton from '../VButton';

export default defineComponent({
  components: { VButton },
  setup: () => {
    const signIn = async () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('openid,email,profile');
      await firebase.auth().signInWithPopup(provider);
    };

    return {
      signIn,
    };
  },
});
</script>
