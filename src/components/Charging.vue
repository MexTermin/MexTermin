<template>
  <div class="charging">
    <div class="loading">
      <span style="--i:1;"></span>
      <span style="--i:2;"></span>
      <span style="--i:3;"></span>
      <span style="--i:4;"></span>
      <span style="--i:5;"></span>
      <span style="--i:6;"></span>
      <span style="--i:7;"></span>
      <span style="--i:8;"></span>
      <span style="--i:9;"></span>
      <span style="--i:10;"></span>
      <span style="--i:11;"></span>
      <span style="--i:12;"></span>
      <span style="--i:13;"></span>
      <span style="--i:14;"></span>
      <span style="--i:15;"></span>
      <span style="--i:16;"></span>
      <span style="--i:17;"></span>
      <span style="--i:18;"></span>
      <span style="--i:19;"></span>
      <span style="--i:20;"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Charging"
};
</script>

<style>
.charging {
  display:flex;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 99999;
  background: var(--mainGradient);
  justify-content: center;
}
.loading {
  position: relative;
  margin: auto;
  width: 120px;
  height: 120px;
  animation: animatebg 10s linear infinite;
}

@keyframes animatebg {
  0% {
    filter: hue-rotate(0deg);
  }

  100% {
    filter: hue-rotate(360deg);
  }
}

.loading span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(calc(18deg * var(--i)));
}
.loading span::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background: green;
  box-shadow: 0 0 10px green, 0 0 20px green, 0 0 30px green, 0 0 40px green,
    0 0 50px green, 0 0 60px green;
  border-radius: 50%;
  animation: animate 1s linear infinite;
  animation-delay: calc(0.1s * var(--i));
}

@keyframes animate {
  0% {
    width: 15px;
    height: 15px;
    transform: scale(1);
  }
  80%,
  100% {
    width: 15px;
    height: 15px;
    transform: scale(0);
  }
}
</style>
