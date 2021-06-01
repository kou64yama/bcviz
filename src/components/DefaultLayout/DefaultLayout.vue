<template>
  <v-app-bar fixed>
    <span>Bcviz</span>
    <router-link to="/">Home</router-link>
    <router-link to="/data">Data</router-link>
  </v-app-bar>
  <v-main class="bg-gray-50">
    <div class="container mx-auto min-h-screen p-4 border-box">
      <router-view />
    </div>
  </v-main>
  <v-footer>
    <a href="/humans.txt">
      <img
        class="inline-block"
        src="../../assets/humanstxt-isolated-blank.gif"
        alt="Humans.txt"
        width="88"
        height="31"
      />
    </a>
  </v-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VAppBar from '../VAppBar';
import VFooter from '../VFooter';
import VMain from '../VMain';

export default defineComponent({
  components: { VAppBar, VFooter, VMain },
});
</script>
