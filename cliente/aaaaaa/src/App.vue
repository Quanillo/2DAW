<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <h1>Take your Time</h1>
  <h1>TYT</h1>
  <h2>Take your Time</h2>
  <h2>TYT</h2>
  <h3>Take your Time</h3>
  <h3>TYT</h3>
  <H4>Take your Time</H4>
  <H4>TYT</H4>
  <p>Take your Time</p>
  <p>TYT</p>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
