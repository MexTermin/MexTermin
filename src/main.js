import { createApp } from "vue";
import App from "./App.vue";
import "../src/Scripts/vhScrool.js";
import { removeLoadingWhenloaded} from "./Scripts/loading";


createApp(App).mount("#app");

removeLoadingWhenloaded();