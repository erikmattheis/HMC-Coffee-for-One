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
    methods: {},
  };
</script>

<template>
  <main>
    <the-navigation />

    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
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
  }

  main {
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    max-width: 1100px;
  }

  body {
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
    flex-direction: column;
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }

  p {
    font-size: 1.2em;
    line-height: 1.5;
    margin: 20px;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
    letter-spacing: 1.1px;
  }

  body,
  html {
    color: #331111;
    background-color: #f5f5f5;
  }

  h2 {
    font-size: 1.6em;
  }

  ul {
    list-style: none;
  }

  li {
    display: inline-block;
    margin: 0 0.5em;
  }

  .sr {
    display: inline-block;
    line-height: 0.5rem;
    text-indent: -10000px;
  }

  .fade-enter {
    opacity: 0 !important;
  }

  .fade-enter-active {
    opacity: 1 !important;
    transition: opacity 0.5s ease-in-out !important;
  }
</style>
