<script setup>
import { RouterView, RouterLink } from "vue-router";
import { onBeforeUnmount } from "vue";
import { borraLocalStorage } from "@/shared/LocalStorage/LocalStorage";
import NavBar from "@/elementos/components/NavBar.vue";

onBeforeUnmount(() => {
                    borraLocalStorage("permitido")
                    console.log("Nos vamos")});
</script>

<template>
 <div>
  <header>
    <NavBar titulo="Menú Principal" :links="[{name: 'Inicio'}, {name: 'Sobre Nosotros'}, {name: 'SubMenu'}]"/>
    <RouterLink 
    :to="{ nombre: 'Usuario'}"
    > Usuario </RouterLink>
  </header>
  <main>
    <RouterView />
  </main>
  
 </div>
</template>

<style scoped>

</style>
