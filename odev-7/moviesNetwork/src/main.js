import { createApp } from "vue";
import App from "./App.vue";
import "./assets/scss/main.css";
import store from "./store/store";

const app = createApp(App);
app.use(store);
app.mount("#app");
