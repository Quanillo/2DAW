<script setup>
import { useHeroeList } from '@/stores/heroeList.js'

const heroeList = useHeroeList()

</script>

<template>
    <h1>Lista de Superhéroes</h1>
    <ul v-for="(heroe, index) in heroeList.showHeroeList" :key="index">
        <li>{{ heroe }}</li>
    </ul>
</template>

<style scoped>

</style>
