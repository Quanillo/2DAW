<script setup>
import { useListadoStore } from "@/stores/Listado.js"
const listado = useListadoStore()
</script>


<template>
    <h1>Listado</h1>
    <ul>
        <li v-for="dato in listado.lista"
            :key="dato">
            {{ dato }}
        </li>

    </ul>
</template>


<style scoped>

</style>