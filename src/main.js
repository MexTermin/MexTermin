import { createApp } from "vue";
import App from "./App.vue";
import { removeLoadingWhenloaded } from "./utils/loadingEventHandler.js";
import { addToWindow } from "./utils/vhScrool.js";


createApp(App).mount("#app");
removeLoadingWhenloaded();
addToWindow()