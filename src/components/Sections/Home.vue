<template>
  <section class="home-container">
    <div class="top-section">
      <div class="text-container">
        <p>
          <span class="blueColor ">&#60;</span>
          Hello
          <span class="blueColor ">/&#62;</span>
        </p>
        <h1>I' MexTermin</h1>
        <p>
          Welcome to the increible mundo de gumball<span class="typed"
            >&#160;</span
          >
        </p>
      </div>

      <div class="logo-container">
        <img :src="logo" alt="mextermin" id="logo" />
      </div>
    </div>

    <div class="bottom-section">
      <div class="footer-text">
        <div class="home-footer">
          <Arrow />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import logo from "../../img/logo.png";
import Arrow from "../DownArrow.vue";

export default {
  name: "Home",
  props: {},
  components: {
    Arrow
  },
  data: function() {
    return {
      logo: logo
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* IMPORTOS */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap");
@import url("../../Constantes.css");
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
  height: 100vh;
  width: 90vw;
  margin: auto;
}

.bottom-section {
  bottom: 0vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.top-section {
  height: 92%;
  display: flex;
  justify-content: space-between;
}
.footer-text {
  text-align: center;
  padding: 5px;
  font-family: "Roboto", "Times New Roman", Times;
}

.text-container p,
h1 {
  display: inline-block;
  width: 100%;
  font-family: "Roboto", "Times New Roman", Times;
  background: linear-gradient(var(--mainDeg), var(--textGradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 40px;
  font-weight: bold;
  text-shadow: 3px 0 0.3em var(--showPrimaryColor);
}
.text-container {
  margin-top: auto;
  margin-bottom: auto;
  padding: 30px;
  box-shadow: 3px 5px 15px 2px var(--showPrimaryColor);
  height: fit-content;
  border: 15px double var(--showPrimaryColor);
  border-top-left-radius: 20%;
  border-bottom-right-radius: 20%;
  width: 40%;
  margin-left: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 2.9em;
}
.blueColor {
  background: linear-gradient(var(--mainDeg), var(--blueColors));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 0.3em rgba(119, 194, 255, 0);
}

.logo-container {
  display: flex;
  align-content: center;
  align-items: center;
  width: 40%;
}
.logo-container img {
  width: 70%;
  filter: opacity(70%);
  user-select: none;
  border-radius: 50px;
}
</style>
