<template>
  <section class="home-container">
    <div class="top-section">
      <div class="text-container">
        <h1 class="welcome-text">
          <span class="blueColor"> &#60; </span>
          Yael Medina (MexTermin)
          <span class="blueColor"> /&#62; </span>
        </h1>
        <p>
          I am a developer interested in web development, among the languages of
          which I have knowledge are: JavaScript, TypeScript, Golang, C#. I
          have experiences in frameworks like Vue, React, Express, Flask.
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
  import logo from "../../images/logo.png";
  import Arrow from "../DownArrow.vue";

  export default {
    name: "Home",
    props: {},
    components: {
      Arrow,
    },
    data: function () {
      return {
        logo: logo,
      };
    },
  };
</script>

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
  .home-description {
    font-size: 10px;
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
    font-size: 30px;
    font-weight: bold;
    text-shadow: 3px 0 0.3em var(--showPrimaryColor);
  }

  .text-container .welcome-text {
    font-size: 40px;
    margin-bottom: 20px;
  }
  .text-container {
    margin-top: auto;
    margin-bottom: auto;
    padding: 30px;
    height: fit-content;
    border-top-left-radius: 20%;
    border-bottom-right-radius: 20%;
    width: 54%;
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

  @media (max-width: 800px) {
    .top-section {
      flex-direction: column;
    }
    .text-container {
      display: inline;
      margin: 0px auto;
      margin-top: auto;
      width: 95%;
      padding: 5px;
    }
    .text-container p,
    h1 {
      font-size: 30px;
    }
    .logo-container {
      width: 100%;
      margin-bottom: auto;
      display: flex;
      justify-content: center;
    }
    .logo-container img {
      width: 40%;
    }
  }

  @media (max-width: 600px) {
    .home-footer {
      transform: translateY(-50px);
    }
  }
  @media (max-width: 500px) {
    .text-container p,
    h1 {
      display: block;
    }
    .text-container {
      text-align: center;
    }
  }

  @media (max-width: 400px) {
    .text-container .welcome-text {
      font-size: 25px;
    }
    .text-container p {
      font-size: 20px;
      line-height: 1.3em;
      display: block;
    }
    .text-container {
      text-align: center;
    }
  }
</style>
