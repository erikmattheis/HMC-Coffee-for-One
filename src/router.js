import { createRouter, createWebHistory } from "vue-router";
import photoGallery from "./components/PhotoGallery.vue";
import artistPage from "./components/ArtistPage.vue";
import projectPage from "./components/ProjectPage.vue";
import the404 from "./components/The404.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "photoGallery",
      path: "/",
      component: photoGallery,
      children: [{
        name: "onePhoto",
        path: "/photo/:name",
        component: photoGallery,
      },
    ],
    },
    {
      name: "artistPage",
      path: "/artist",
      component: artistPage,
    },
    {
      name: "projectPage",
      path: "/project",
      component: projectPage,
    },
    {
      name: "the404",
      path: "/:pathMatch(.*)*",
      component: the404,
    },
  ],
});

export default router;
