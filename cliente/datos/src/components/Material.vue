<template>
    <p>Numero de serie: {{ material.numSerie }} Modelo: {{ material.modelo }}</p>
    <p>Reservado: {{ material.reservado }}</p><button>Reservar</button>
    <p>Fecha: {{ material.fecha }}</p>
</template>
  
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    material: {
        type: Object,
  },
});
</script>

<style></style>