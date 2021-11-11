const App = require("./App.vue");
const { removeLoadingWhenloaded } = require("./scripts/loadingEventHandler.js");
const { createApp } = require("vue");
const { addToWindow } = require("./scripts/vhScrool.js");


createApp(App).mount("#app");
removeLoadingWhenloaded();
addToWindow()