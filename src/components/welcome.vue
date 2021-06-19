<template>
  <div class="img-container">
    <img :src="welcomeImg" />
    <div class="rotation shark-container">
      <img :src="sharkImg" id="shark" />
    </div>
  </div>
</template>

<script>
import welcomeImg from "../img/p2.png";
import sharkImg from "../img/shark.png";
export default {
  name: "welcome",
  props: {
    Title: String
  },
  data: function() {
    return {
      welcomeImg: welcomeImg,
      sharkImg: sharkImg
    };
  }
};
</script>

<style scoped>
.img-container {
  position: absolute;
  z-index: 10;
  width: 100%;
  margin-top: 9%;
  display: flex;
  justify-content: center;
}
.img-container img {
  width: 40vw;
  height: 57vh;
  user-select: none;
}
#shark {
  position: absolute;
  transform: rotate(220deg);
  left:-15%;
  margin-top:200px;
  width: 230px;
  height: 270px;
}
.shark-container {
  position: absolute;
  top: 50%;
  left: 50%;
  padding-left: 10px;
  padding-top: 10px;
  user-select: none;
}
.rotation{
  animation-name: rotation;
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@keyframes rotation{
  100%{
    transform:rotate(360deg);
  }
}
</style>
