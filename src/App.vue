<template>
<div class="body">
  <Charging/>
  <div class="gb-img">
    <img :src="bg" alt="Ocean Background" >
  </div>
  <Navbar/>
  <Home />
  <HowIm/>

</div>
</template>

<script>
  import HowIm from "./components/Sections/HowIm.vue";
  import Home from "./components/Sections/Home.vue";
  import Navbar from "./components/Navbar.vue";
  import Charging from "./components/Charging.vue";
  import bg from "./img/1920.png";

  export default {
    name: "App",
    components: {
      Home,
      HowIm,
      Navbar,
      Charging
    },
    data: function() {
      return{
        bg:bg
      }
    }
  };
</script>

<style>
  @import url("./Constantes.css");
  body {
    overflow: hidden;
  }
  * {
    margin: 0px;
    padding: 0px;
  }
  #app {


    width: 100vw;
  }

  .gb-img{
    position:absolute;
    width:100vw;
    height:100vh;
    z-index:-100;
  }
  .gb-img img{
    background-repeat:no-repeat;
    background-position: center;
    filter:blur(20px);
    object-fit:cover;
    width:100%;
    height:100%;
    transform: scale(1.1);
  }

</style>
