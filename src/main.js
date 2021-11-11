import { createApp } from "vue";
import App from "./App.vue";
import "./scripts/vhScrool.js";
import { removeLoadingWhenloaded } from "./scripts/loadingEventHandler.js";


createApp(App).mount("#app");

removeLoadingWhenloaded();