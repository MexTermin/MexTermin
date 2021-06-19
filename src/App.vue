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
  background: linear-gradient(to bottom, rgb(0, 20, 56), rgb(3, 9, 27));
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}
</style>
