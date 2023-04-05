<script>
import VueFeather from "vue-feather";
import PhotoGallery from "./components/PhotoGallery.vue";
import ArtistPage from "./components/ArtistPage.vue";
import ProjectPage from "./components/ProjectPage.vue";
import TheNavigation from "./components/TheNavigation.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: "App",
  components: {
    PhotoGallery,
    ArtistPage,
    ProjectPage,
    VueFeather,
    TheNavigation,
    TheFooter,
  },
  data() {
    return {
      mode: 0,
    };
  },
  computed: {
    shouldEnableTransition() {
      // Return true if the current route is not one of the routes where the transition should be disabled
      return this.$route.name !== "onePhoto";
    },
  },
  methods: {},
};
</script>

<template>
  <main>
    <the-navigation />

    <router-view v-slot="{ Component }">
  <transition-group v-if="shouldEnableTransition" name="fade" appear enter-active-class="fade-enter-active" leave-active-class="fade-leave-active">
    <component :is="Component" :key="$route.fullPath" />
  </transition-group>
  <component v-else :is="Component" :key="$route.fullPath"/>
</router-view>


  </main>

  <the-footer />
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap");

:root {
  font-family: Poppins, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: light dark;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
}

main {
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  max-width: 1100px
}

p {
  text-align: left;
}

@media (max-width: 480px) {
  main {
    max-width: 100%;
    padding: 1rem 0.5rem;
  }
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
  flex-direction: column;
}

p {
  font-size: 1.2em;
  line-height: 1.5;
  margin: 20px;
}

* {
  box-sizing: inherit;
  padding: 0;
  margin: 0;
}

body,
html {
  margin: 0;
  padding: 0;
  color: #441111;
  background-color: #f5f5f5;
  max-width: 100%;
}

.page-title {
  display: inline-block;
  font-size: 42px;
  padding: 10px 20px;
  margin-top: 20px;
}

ul {
  list-style: none;
}

section {
  margin: 0 auto 120px;
}

.sr {
  display: inline-block;
  line-height: 0.5rem;
  text-indent: -10000px;
}

.fade-enter {

  opacity: 0;
}

.fade-enter-active {

  transition: opacity 0.2s ease-in-out;
  opacity: 1;
}

.fade-leave {

  opacity: 1;
}

.fade-leave-active {

  transition: opacity 0.2s ease-in-out;
  opacity: 0;
}
</style>
