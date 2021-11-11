import { createApp } from "vue";
import App from "./App.vue";
import { removeLoadingWhenloaded } from "../src/scripts/loadingEventHandler";
import { addToWindow } from "../src/scripts/vhScrool";


createApp(App).mount("#app");
removeLoadingWhenloaded();
addToWindow()