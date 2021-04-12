<template>
  <v-button @click="open = true">Sync data</v-button>
  <v-dialog v-model:open="open">
    <v-card elevation="24">
      <v-card-title style="padding-bottom: 1rem">Data Sync</v-card-title>
      <v-alert>
        This feature is <strong>under development</strong>. Note that the data
        is stored on the server but is not encrypted.
      </v-alert>
      <v-card-text>
        <div v-if="user" style="display: flex; align-items: center">
          <img
            :src="user.photoURL"
            :alt="user.displayName"
            style="width: 2rem; height: 2rem; border-radius: 1rem"
          />
          <div style="margin: 0 0.5rem">
            <div class="displayName" v-text="user.displayName" />
            <div class="email" v-text="user.email" />
          </div>
          <div style="flex: 1" />
          <sign-out flat>Sign out</sign-out>
        </div>
        <div v-else>
          <google-sign-in flat>Sign in with Google</google-sign-in>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-button flat @click="open = false">Cancel</v-button>
        <v-button flat :disabled="user === null" @click="syncData"
          >Sync</v-button
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import firebase from 'firebase/app';
import { ref, defineComponent } from 'vue';
import { GoogleSignIn } from '../../components/SignIn';
import SignOut from '../../components/SignOut';
import VAlert from '../../components/VAlert';
import VButton from '../../components/VButton';
import {
  VCard,
  VCardActions,
  VCardText,
  VCardTitle,
} from '../../components/VCard';
import VDialog from '../../components/VDialog';
import { sync } from './sync';

export default defineComponent({
  components: {
    GoogleSignIn,
    SignOut,
    VAlert,
    VButton,
    VCard,
    VCardActions,
    VCardText,
    VCardTitle,
    VDialog,
  },
  emits: ['completed'],
  setup: (props, { emit }) => {
    const open = ref(false);
    const user = ref<firebase.User | null>(null);

    firebase.auth().onAuthStateChanged((value) => {
      user.value = value;
    });

    const syncData = async () => {
      if (user.value === null) return;

      sync(user.value.uid);
      open.value = false;
      emit('completed');
    };

    return {
      open,
      user,
      syncData,
    };
  },
});
</script>

<style lang="postcss" scoped>
.email {
  font-size: 0.785rem;
}
</style>
