<script setup>
import { useRouter } from 'vue-router';
import Formulario from './Formulario.vue';
const router = useRouter();
const Ainicio = () => router.push({
    name:'Inicio',
});

</script>

<template>
    <div>
        <h1>SubMenu1</h1>
        <button @click="Ainicio">Vamos a Inicio</button>
        <Formulario/>
    </div>
</template>


<style  scoped>

</style>