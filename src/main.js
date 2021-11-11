import { createApp } from "vue";
import App from "./App.vue";
const { removeLoadingWhenloaded } = require("./scripts/loadingEventHandler");
const { addToWindow } =  require("./scripts/vhScrool");


createApp(App).mount("#app");
removeLoadingWhenloaded();
addToWindow()