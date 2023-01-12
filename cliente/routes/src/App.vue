<script setup>
import NavBar from './components/NavBar.vue';
</script>

<template>
  <header>
    <div class="wrapper">
     <h1>Welcome to Codigo Perro WebPage</h1>
      <NavBar />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
