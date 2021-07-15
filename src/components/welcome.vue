<template>
  <div class="img-container">
    <img :src="welcomeImg" id="welcome"/>
    <div class=" shark-container">
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
#welcome{
  width: 40%;
  height: 57%;
  user-select: none;
}
.img-container {
  z-index: 10;
  width: 100%;
  margin-top: 9%;
  display: flex;
  justify-content: center;
}

#shark {
  width: 12vw;

}
.shark-rotation-conf {
  position: absolute !important;
  transform: rotate(220deg) !important;
  left:-15% !important;
  margin-top:200px !important;
  width: 230px;
  height: 270px;
}
.shark-container {
  position: absolute;
  top: 15vw;
  left: 23%;
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

@media  (max-width:1660px) {
  .img-container {
      margin-top: 9%;
  }
  #welcome{
    width: 40%;
  }
  .shark-container{
      top: 14.6vw;
      left: 24%;
  }
}
@media  (max-width:1360px) {
  #shark{
    width:18vw;
  }
  #welcome{
    width: 60%;
  }
  .shark-container{
      top: 18vw;
      left: 10%;
  }
}
@media  (max-width:1080px) {
  .img-container {
      margin-top: 19%;
  }
  #shark{
    width:20vw;
  }
  #welcome{
    width: 60%;
  }
  .shark-container{
      top: 27vw;
      left: 8%;
  }
}

</style>
