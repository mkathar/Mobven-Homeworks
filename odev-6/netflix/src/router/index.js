import { createWebHistory, createRouter } from "vue-router";
import Welcome from "../components/welcome.vue";
import Home from "../pages/Home.vue";
import Child from "../pages/Child.vue";
const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
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
