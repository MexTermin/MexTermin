<template>
  <nav>
    <div class="nav-logo"><i class="fas fa-laptop-code"></i></div>
    <div class="menu">
      <ul>
        <li class="menu-item select">.Home();</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>
nav {
  position: fixed;
  top: 0px;
  width: 90vw;
  margin-left:5vw;
  margin-right:5vw;
  padding-top: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.menu ul {
  text-decoration: none;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.menu-item {
  background: -webkit-linear-gradient(var(--mainDeg),var(--textGradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 0px 20px;
  font-size: 27px;
  font-weight:bold;
}
.menu-item:hover{
    transform: scale(1.05);
    cursor:pointer;
    text-shadow: 0 0 8px white;
}

.select{
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.616);
}

.nav-logo {
  background: -webkit-linear-gradient(var(--mainDeg),var(--textGradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-size: 60px;
}
</style>
