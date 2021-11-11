import { createApp } from "vue";
import App from "./App.vue";
import { removeLoadingWhenloaded } from "./scripts/loadingEventHandler";
import { addToWindow } from "./scripts/vhScrool";


createApp(App).mount("#app");
removeLoadingWhenloaded();
addToWindow()