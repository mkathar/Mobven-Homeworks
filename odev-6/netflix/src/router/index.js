import { createWebHistory, createRouter } from "vue-router";
import Welcome from "../components/welcome.vue";
import Main from "../pages/Main.vue";
import Child from "../pages/Child.vue";
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
  {
    path: "/Child",
    name: "Child",
    component: Child,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
