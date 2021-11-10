<template>
  <section class="second-section">
    <div class="logos">
      <a href="https://github.com/MexTermin" target="_blank">
        <img :src="github" alt="Github Logo" />
      </a>
      <a
        href="https://www.linkedin.com/in/yael-medina-polanco-b4a904211/"
        target="_blank"
      >
        <img :src="linkedin" alt="Linkedin Logo" />
      </a>
      <a href="https://twitter.com/YaelMed36493140" target="_blank">
        <img :src="twitter" alt="Linkedin Logo" />
      </a>
    </div>
    <div class="uparrow" v-on:click="scrollUp">
      <img :src="uparrow" alt="Return Top" />
      <span>
        Back to top
      </span>
    </div>
  </section>
</template>

<script>
import github from "../../img/github.svg";
import linkedin from "../../img/linkedin.svg";
import twitter from "../../img/twitter.svg";
import uparrow from "../../img/upArrow.svg";
import { scrollUp } from "../../scripts/vhScrool.js";
export default {
  name: "SecondSection",
  methods: {
    scrollUp,
  },
  data: function() {
    return {
      github,
      linkedin,
      twitter,
      uparrow,
    };
  },
};
</script>

<style scoped>
@import url("../../Constantes.css");

.second-section {
  margin-top: 7vh;
  height: 93vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.logos {
  width: 80%;
  height: 40%;
  color: white;
  display: flex;
  justify-content: center;
  align-self: center;
  margin-bottom: 70px;
}

.logos img {
  align-self: center;
  width: 120px;
  height: 120px;
  margin: 8px;
  cursor: pointer;
}
.logos a {
  align-self: center;
}
.logos img:hover {
  transform: scale(1.05);
}
.uparrow img {
  width: 40px;
}
.uparrow {
  display: flex;
  justify-content: center;
}
.uparrow:hover {
  cursor: pointer;
}
.uparrow span {
  user-select: none;
  align-self: center;
  justify-content: center;
  text-align: center;
  color: white;
  margin-left: 10px;
  padding-top: 8px;

  font-family: "Roboto", "Times New Roman", Times;
  background: linear-gradient(var(--mainDeg), var(--textGradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 25px;
  font-weight: bold;
  text-shadow: 3px 1 0.3em var(--showPrimaryColor);
}

@media (max-width: 600px) {
  .logos img {
    width: 100px;
    height: 100px;
  }
  .uparrow img {
    width: 30px;
  }
  .uparrow span {
    font-size: 20px;
  }
}
@media (max-width: 400px) {
  .logos img {
    width: 50px;
    height: 50px;
  }
}
</style>
