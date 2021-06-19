<template>
  <Home msg="" />
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style>
body {
  overflow: hidden;
}
* {
  margin: 0px;
  padding: 0px;
}
#app {
  background: linear-gradient(to bottom, rgb(1, 15, 43), rgb(0, 0, 0));
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}
</style>
