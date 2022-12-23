<template>
    <p>Numero de serie: {{ material.numSerie }} Modelo: {{ material.modelo }}</p>
    <span>Reservado: {{ material.reservado }}<button>Reservar</button></span>
    <p>Fecha: {{ material.fecha }} <input type="date" v-model="newDate"></p>
</template>
  
<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
    material: {
        type: Object,
  },
});

const newDate = ref(new Date());
</script>

<style>
 button{
    background-color:whitesmoke;
 }
</style>