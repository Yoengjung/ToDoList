import { createApp } from "vue";
import App from "./App.vue";
import store from "./store.js";
import { router } from "./router/index";

const app = createApp(App);
app.use(store);
app.use(router).mount("#app");
