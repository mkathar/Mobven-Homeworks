import { createWebHistory, createRouter } from "vue-router";
import SingIn from "../pages/signIn.vue";
import textingScreen from "../pages/textingScreen.vue";

const routes = [
  {
    path: "/",
    name: "SignIn",
    component: SingIn,
  },
  {
    path: "/login",
    name: "login",
    component: SingIn,
  },
  {
    path: "/textingScreen",
    name: "textingScreen",
    component: textingScreen,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
