<template>
  <div class="arrow arrow-animation">
    <i class="fas fa-angle-double-down arrow-icon " v-on:click="scrollDown"></i>
  </div>
</template>

<script>
import { scrollDown } from "../utils/vhScrool.js";
export default {
  name: "DownArrow",
  methods: {
    scrollDown,
  },
};
</script>

<style scoped>
@import url("../Constantes.css");

.arrow-icon {
  font-size: 50px;
  background: -webkit-repeating-linear-gradient(top, var(--textGradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.arrow-icon:hover {
  cursor: pointer;
  transform: scale(1.05);
}

.arrow-animation {
  animation-name: arrow-animation;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
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

@media (max-width: 400px) {
  .arrow-icon {
    font-size: 40px;
  }
}
</style>
