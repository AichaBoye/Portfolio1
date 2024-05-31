<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import contact from "./views/ContactView.vue"
</script>

<template>
  <header>
    <!--photo de profil ici-->
    <a href="http://localhost:5174/"
      ><img
        alt="Vue logo"
        class="logo"
        src="@/assets/imageCV.jpg"
        width="125"
        height="125"
    /></a>

    <!--bref présentation ici-->
    <div class="greetings">
      <h1 class="green">{{ msg }}</h1>
      <h3 class="moi">
        Hi je suis Marie Aissatou Boye <br />
        Developpeuse Web Junior
        <a href="https://vitejs.dev/" target="_blank" rel="noopener"></a>
        <a href="https://vuejs.org/" target="_blank" rel="noopener"></a>
      </h3>
    </div>
    <div class="wrapper">
      <HelloWorld msg="Bienvenu sur mon site!" />

      <!--bar de navigation ici-->
      <nav>
        <a href="#home">Home</a>
        <a href="#about">A propos</a>
        <a href="#project">Réalisation</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>
  <main class="contenu">

  </main>
 
  <footer>
    <!--contenue du footer ici-->
    <div class="réseaux">
      <a
        href="https://github.com/AichaBoye/Marie.html"
        target="blank"
        class="fa fa-github"
        ><img class="réseaux" src="@/assets/github.png" alt=""
      /></a>
      <a href="https://www.facebook.com/" target="blank" class="fa fa-facebook"
        ><img class="réseaux" src="@/assets/facebook.png" alt=""
      /></a>
      <a
        href="https://www.instagram.com/aichaeboye/"
        target="blank"
        class="fa fa-instagram"
        ><img class="réseaux" src="@/assets/instagram.png" alt=""
      /></a>

      <br />
      <div>
        <p>
          <small class="copyright"
            >Dernière mise à jour : {{ le22mai2024 }} le 22 mai 2024</small
          >
        </p>
      </div>
    </div>
  </footer>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 4.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  text-align: left;
    margin-left: 10rem;
    font-size: 1rem;
    top: 0px;
    position: fixed;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    height: 670px;
    width: 1160px;
    background-image: url(/src/assets/th.jpeg);
    position: fixed;
    top: 0;
    left: auto;
    display: flex;
    justify-content: center;
    padding: 160px;
  }

  .logo {
    border-radius: 60px;
    width: 300px;
    height: 290px;
    position: absolute;
    top: 200px;
    left: 700px;
    display: inline-flex;
  }

  nav {
    
  }
}
.contenu {
  bottom: -400px;
  display: grid;
  right: 550px;
  width: 100%;
  position: relative;
  transform: translateX(-60%);
  text-align: justify;
}
.project {
  position: relative;
  text-align: center;
  display: inline-flex;
  right: 60px;
  width: 140px;
  margin-top: 40px;
}
.titre-1 {
  position: absolute;
  display: flex;
  top: 300px;
  left: 140px;
  text-align: center;
}
.titre-2 {
  position: absolute;
  display: flex;
  top: 300px;
  left: 410px;
  text-align: center;
}
.titre-3 {
  position: absolute;
  display: flex;
  top: 300px;
  left: 705px;
  text-align: center;
}
.background {
  width: 960px;
  background-image: url(/src/assets/th.jpeg);
  position: relative;
  top: 620px;
  left: 1125px;
}
.contact {
  display: inline-flex;
  position: fixed;
  top: 0;
  color: black;
  left: 700px;
  padding: 320px;
  margin-top: 470px;
}
.about {
  color: black;
  width: 434px;
  top: 250px;
  height: 330px;
  position: fixed;
  left: 460px;
}
.hd {
  position: relative;
  bottom: 25px;
  display: flex;
  left: 10px;
  color: black;
}
.h4 {
  position: relative;
  bottom: 60px;
  color: white;
  margin: 25px;
  display: flex;
  text-align: justify;
  left: 10px;
}
.réseaux {
  position: relative;
  width: 46px;
  top: -10px;
  margin: 20px;
  left: 360px;
  display: inline-flex;
}
footer {
  background-image: url(/src/assets/th.jpeg);
  width: 1160px;
  position: fixed;
  left: auto;
  bottom: 0;
  height: 270px;
}
.copyright {
  color: white;
  position: absolute;
  width: 235px;
  top: 105px;
  left: 160px;
}
html {
  height: 4720px;
  width: 2000px;
  overflow: hidden;
}
.moi {
  position: fixed;
  top: 210px;
  left: 1830px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.element {
  animation: fadeIn 1s;
}
</style>
