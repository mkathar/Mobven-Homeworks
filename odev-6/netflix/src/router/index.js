import { createWebHistory, createRouter } from "vue-router";
import Welcome from "../components/welcome.vue";
import Main from "../pages/Main.vue";

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/Main",
    name: "Main",
    component: Main,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
