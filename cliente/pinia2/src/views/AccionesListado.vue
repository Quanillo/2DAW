<script setup>
import { ref } from "vue"
import { useListadoStore } from "@/stores/Listado.js"
const listado = useListadoStore()
const elemento = ref(0)

</script>


<template>
    <h1>Acciones sobre el Listado</h1>
    <p>El último elemento es: {{ listado.ultimo }}</p>
    <label>Elemento a eliminar</label>
    <input type="text" v-model="elemento" @keyup.enter="listado.eliminaElemento(elemento)">
    <label>Elemento a añadir</label>
    <input type="text" v-model="elemento" @keyup.enter="listado.anadeElemento(elemento)">
</template>


<style scoped>

</style>