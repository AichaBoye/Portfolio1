<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import HomeView from "./views/HomeView.vue"
import Modal from "./components/Modal.vue"
</script>

<template>
  <Header />
  <main class="contenu">
    <RouterView />
    <!-- <HomeView /> -->
  </main>
  <Modal />
  <Footer />
  
</template>

<style scoped>
@media (min-width: 1024px) {
  header {
    height: 250px;
    width: 1200px;
    background-image: url(/src/assets/th.jpeg);
    display: flex;
    justify-content: center;
    padding: 166px;
    margin-left: -140px;
    top: 0;
    margin-top: -20px;
  }

}
.contenu {

  margin-left: -490px;
  margin-top: 420px;
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

html {
  height: 4720px;
  width: 2000px;
  overflow: hidden;
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