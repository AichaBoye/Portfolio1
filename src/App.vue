<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

</script>

<template>
  <div class="container">
  <header>
    <a href="http://localhost:5174/"><img alt="Vue logo" class="logo" src="@/assets/imageCV.jpg" width="125" height="125" /></a>
    
    <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3 class="moi">
      Hi je suis Marie Aissatou Boye <br>
      Developpeuse Web Junior
       <a href="https://vitejs.dev/" target="_blank" rel="noopener"></a> 
      <a href="https://vuejs.org/" target="_blank" rel="noopener"></a>
    </h3>
  </div>
    <div class="wrapper">
      <HelloWorld msg="Bienvenu sur mon site!" />
      

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">A propos </RouterLink>
        <RouterLink to="/project">Réalisation</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>

  <footer>
    <div class="réseaux">
                <a href="https://github.com/AichaBoye/Marie.html" class="fa fa-github"><img class="réseaux" src="@/assets/github.png" alt=""></a>
                <a href="https://www.facebook.com/" class="fa fa-facebook"><img class="réseaux" src="@/assets/facebook.png" alt=""></a>
                <a href="https://www.instagram.com/aichaeboye/" class="fa fa-instagram"><img class="réseaux" src="@/assets/instagram.png" alt=""></a>
                  
                <br>
                    <p class="datetime = 2023-12-02"><small class="copyright">Dernier mise à jour le 02 Décembre2023</small></p>
                  
             </div>
  </footer>
</div>

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
  width: 100%;
  font-size: 12px;
  text-align: end;
  margin-bottom: 100px;
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
    display: inline-flex;
    height: 290px;
    width: 1200px;
    bottom: 300px;
    background-image: url(/src/assets/th.jpeg);
    right: 8%;
    position: absolute;
  }

  .logo {
    margin: 10px 3rem auto;
    border-radius: 60px;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap-reverse;
  }

  nav {
    text-align: left;
    margin-left: 35rem;
    font-size: 1rem;
    top: 0px;
    position: fixed;
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
  right: 80px;
  width: 140px;
  margin: 65px;
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
  width: 800px;
  background-image: url(/src/assets/th.jpeg);
  position: relative;
  top: 60px;
  right: 0px;
}
.contact {
  display: inline-flex;
  position: relative;
  top: 125px;
  color: black;
}
.about{
  color: black;
    width: 434px;
    top: -80px;
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
.h4{
  position: relative;
  bottom: 60px;
  color: white;
  margin: 25px;
  display: flex;
  text-align: justify;
  left: 10px;
}
.réseaux{
  position: relative;
  display: inline-flex;
  width: 46px;
  top: -15px;
  margin: 20px;
  left: 440px;
}
footer{
  background-image: url(/src/assets/th.jpeg);
  width: 1200px;
  position: fixed;
  height: 135px;
  bottom: 0px;
  right: 8%;
}
.datetime{
  color: white;
  position: absolute;
  width: 235px;
  top: 105px;
  left: 160px;
}
html{
  height: 4720px;
  width: 2000px;
}
.moi{
position: fixed;
top: 115px;
}
</style>
