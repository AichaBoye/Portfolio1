<script setup>
import AproposView from "./AproposView.vue";
import ContactView from "./ContactView.vue";
import RealisationView from "./RealisationView.vue";
</script>

<template>
  <div id="home">
    <AproposView />
    <RealisationView />
    <ContactView />
  </div>
  <div>
    <a id="retour" href="#app">Haut de page</a>
  </div>
</template>

<style>

.home{
  color: white;
}

#retour {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

</style>
