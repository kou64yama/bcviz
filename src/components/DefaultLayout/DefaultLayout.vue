<template>
  <v-app-bar>
    <span>TANITA BC Visualizer</span>
    <router-link to="/">Home</router-link>
    <router-link to="/data">Data</router-link>
  </v-app-bar>
  <v-main>
    <div class="container">
      <router-view />
    </div>
  </v-main>
  <v-footer>
    <a href="/humans.txt">
      <img
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

<style scoped>
.container {
  position: relative;
  padding: 1rem;
  min-height: 100%;
  box-sizing: border-box;
}
</style>
