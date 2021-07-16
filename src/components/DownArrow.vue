<template>
  <div class="arrow arrow-animation">
    <i class="fas fa-angle-double-down arrow-icon "></i>
  </div>
</template>

<script>
export default {
  name: "DownArrow"
};
</script>

<style scoped>
@import url("../Constantes.css");

.arrow-icon {
  font-size: 50px;
  background: -webkit-repeating-linear-gradient(
    top,
    var(--textGradient)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.arrow-icon:hover {
  cursor: pointer;
  transform: scale(1.05);
  background: -webkit-repeating-linear-gradient(
    top,
    rgb(5, 74, 153) 0px,
    rgb(0, 0, 0) 60px
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.arrow-animation {
  animation-name: arrow-animation;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function:linear;

}

@keyframes arrow-animation {
  0% {
    position: relative;
    bottom: 0px;
  }
  60% {
    bottom: -20px;
  }
  100% {
    position: relative;
    bottom: 0px;
  }
}
</style>
