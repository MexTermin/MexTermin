import { createApp } from "vue";
import App from "./App.vue";
import "../src/scripts/vhScrool.js";
import { removeLoadingWhenloaded } from "./scripts/loading";


createApp(App).mount("#app");

removeLoadingWhenloaded();