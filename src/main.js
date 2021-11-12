import { createApp } from "vue";
import App from "./App.vue";
import { removeLoadingWhenloaded } from "./scripts/loadingEventHandler.js";
import { addToWindow } from "./scripts/vhScrool.js";


createApp(App).mount("#app");
removeLoadingWhenloaded();
addToWindow()