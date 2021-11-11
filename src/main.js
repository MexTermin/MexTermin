import { createApp } from "vue";
import App from "./App.vue";
import "/src/Scripts/vhScrool.js";
import { removeLoadingWhenloaded } from "/src/Scripts/loading.js";


createApp(App).mount("#app");

removeLoadingWhenloaded();