import { createWebHistory, createRouter } from "vue-router";
import Welcome from "../components/welcome.vue";
import Home from "../pages/Home.vue";
import Child from "../pages/Child.vue";
import SingIn from "../pages/SingIn.vue";

const routes = [
  {
    path: "/",
    name: "SignIn",
    component: SingIn,
  },
  {
    path: "/welcome",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
    props: true,
  },
  {
    path: "/Child",
    name: "Child",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
