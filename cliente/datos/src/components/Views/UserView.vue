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

const materialList = ref([]);
const showReservar = ref(false);
const emits = defineEmits(['back']);

onMounted(() => {
  setMaterialList();
})
const props = defineProps({
  user: {
    type: Object,
  },
});
const setMaterialList = async () => {
  try {
    const response = await axios.get(
      `http://localhost:3000/material/`, {
    })
    materialList.value = response.data;
  }
  catch (e) {
    console.log(e)
  }
}

</script>

<style>

</style>