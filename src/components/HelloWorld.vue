<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  
</template>

<style scoped>
h1 {
  font-weight: 450;
  font-size: 1.6rem;
  position: fixed;
  top: 55px;
  left: 110px;
}

h3 {
  font-size: 1.2rem;
  position: relative;
  left: -40px;
  bottom: 40px;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
