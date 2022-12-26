<template>
  <div>{{ user.name }}</div>
  <div v-if="!showReservar">
    <button @click="() => showReservar = true">reservar</button>
    <button @click="emits('back')">cerrar sesion</button>
  </div>
  <div v-else>
    <button @click="() => showReservar = false">atrás</button>
    <MaterialList :materialList="materialList" />
  </div>

</template>
  
<script setup>
import MaterialList from '../MaterialList.vue'
import { ref, onMounted } from "vue";
import axios from 'axios';

//const materialList = ref([]);
const showReservar = ref(false);
const emits = defineEmits(['back']);

const props = defineProps({
  user: {
    type: Object,
  },
  materialList: {
    type: Array,
  }
});

</script>

<style>

</style>