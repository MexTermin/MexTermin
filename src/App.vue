<template>
  <div class="body">
    <Loading />
    <div class="gb-img">
      <div class="gris-color"></div>
      <img :src="bg" alt="Ocean Background" />
    </div>
    <Navbar />
    <Home />
    <SecondSection />
  </div>
</template>

<script>
import SecondSection from "./component/Sections/SecondSection.vue";
import Home from "./component/Sections/Home.vue";
import Navbar from "./component/Navbar.vue";
import Loading from "./component/Loading.vue";
import bg from "./images/1920.png";

export default {
  name: "App",
  component: {
    Home,
    SecondSection,
    Navbar,
    Loading,
  },
  data: function() {
    return {
      bg: bg,
    };
  },
};
</script>

<style>
@import url("./Constantes.css");
body {
  overflow: hidden;
  font-family: "Karla", sans-serif;
}
* {
  margin: 0px;
  padding: 0px;
}
#app {
  width: 100vw;
}
.gb-img {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -100;
}
.gb-img img {
  background-repeat: no-repeat;
  background-position: center;
  filter: blur(20px);
  object-fit: cover;
  width: 100%;
  height: 100%;
  transform: scale(1.1);
  z-index: 1;
}
.gris-color {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}

@media (max-width: 460px) {
  .gb-img {
    position: fixed;
  }
  .gb-img img {
    transform: scale(1.2);
  }
}
</style>
