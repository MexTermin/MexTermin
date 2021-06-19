<template>
  <div class="home-container">
    <div class="title">
      {{ msg }}
    </div>
    <Welcome />
    <div class="bottom-section">
      <div class="welcome-text">
        <p>I'm MexTermin, do you want to know me?</p>
      </div>
      <div class="home-footer">
        <Arrow />
      </div>
    </div>
  </div>
</template>

<script>
import Welcome from "./welcome.vue";
import Arrow from "./arrow.vue";
export default {
  name: "Home",
  props: {
    msg: String
  },
  components: {
    Welcome,
    Arrow
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  color: white;
  font-size: 2em;
}

.home-footer {
  width: 100%;
  display: flex;
  justify-content: center;
}

.home-container {
  overflow: hidden;
}

.bottom-section {
  width: 100%;
  position: fixed;
  bottom: 0vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.welcome-text {
  text-align: center;
  padding: 55px;
  font-size: 2.5em;
  background: -webkit-repeating-linear-gradient(
    top,
    rgb(4, 212, 240) 0px,
    rgb(11, 74, 248) 60px
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
