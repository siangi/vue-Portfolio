import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProjectDetailView from "../views/ProjectDetailView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/home",
      component: HomeView
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: ProjectDetailView,
      props: true,
    },
  ],
}); 

export default router;
