<template>
  <div v-if="showMasive">
    <Masive />
  </div>
  <div v-else-if="showMaterialList">
    <MaterialList :materialList="materialList"/>
  </div>
  <div v-else>
    <button @click="showMasive = true">Cargar csv</button>
    <button @click="showMaterialList = true">reservar</button>
  </div>
</template>

<script setup>
import Masive from './components/Masive.vue';
import MaterialList from './components/MaterialList.vue'
import { ref, onMounted } from "vue";
import axios from 'axios';

const materialList = ref([]);
const showMasive = ref(false);
const showMaterialList = ref(false);

onMounted(() => {
    setMaterialList();
})

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

<style scoped>

</style>