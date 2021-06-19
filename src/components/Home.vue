<template>
  <div class="home-container">
    <div class="title">
      {{ msg }}
    </div>
    <welcome />
    <div class="home-footer">
      <div class="arrow">
        <i class="fas fa-angle-double-down arrow-icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
import welcome from "./welcome.vue";
export default {
  name: "Home",
  props: {
    msg: String
  },
  components: {
    welcome
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  color: white;
  font-size: 2em;
}
.arrow-icon {
  color: line;
  font-size: 3.5em;
  background: -webkit-repeating-linear-gradient(
    top,
    rgb(58, 230, 253) 0px,
    blue 60px
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
.home-footer {
  width: 100%;
  position: fixed;
  bottom: 0vh;
  display: flex;
  justify-content: center;
}

.home-container {
  overflow: hidden;
}
</style>
