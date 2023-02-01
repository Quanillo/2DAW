<script setup>
import { useHeroeList } from '@/stores/heroeList.js'
import { ref } from 'vue';

const heroeList = useHeroeList()
const newHeroe = ref('')

const addHeroe = () => {
    heroeList.addHeroeList(newHeroe.value)
}
</script>


<template>
    <div>
        <h1>Añade Superheroes</h1>

            <input v-model.trim="newHeroe"  type="text">
            <button @click="addHeroe">enviar</button>

    </div>
</template>


<style scoped>

</style>