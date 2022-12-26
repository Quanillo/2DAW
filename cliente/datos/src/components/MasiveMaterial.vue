<template>
  <button @click="emits('back')">atrás</button>
  <ReadFile texto="Elige un fichero" @carga="cargaFichero" />
  <label for="progreso">Downloading progress:</label>
  <progress id="progreso" :value="fichero.length" max="100"> {{ (progreso / fichero.length) * 100 }} </progress>
  <div v-if="terminado">
    <p>Terminado</p>
    <button @click="cargaEnBBDD">Carga En Base Datos</button>
    <h1>Se han producido los siguientes errores {{ ficheroErrores.length }}</h1>
    <h1>Llevamos grabados la cantidad de {{ progreso }} usuarios</h1>
    <ul>
      <li v-for="(el, key) in ficheroErrores" :key="key">{{ el }}</li>
    </ul>
  </div>

</template>
  
<script setup>
import ReadFile from "./ReadFile.vue";
import axios from "axios";
import { ref } from "vue";



const fichero = ref([]);
const ficheroErrores = ref([])
const terminado = ref(false)
const progreso = ref(1)
const emits = defineEmits(['back']);

const cargaFichero = (fich) => {
  progreso.value = 1
  fichero.value = fich
    .toString()
    .trim()
    .split('\n')
  progreso.value = 50;
  terminado.value = true
  const cabecera = fichero.value[0].split(',')
  fichero.value.shift()
  fichero.value = fichero.value.map((el, idx) =>
    el.split(',')
      .map((el2, idx2) => [cabecera[idx2], el2])
      .map((el2) => {
        let obj = {}
        obj[el2[0]] = el2[1]
        return obj
      })
      .reduce((ac, el) => { return { ...ac, ...el } }, {})
  )
  progreso.value = 100
}


const cargaEnBBDD = () => {
  const headers = { "Access-Control-Allow-Origin": "http://localhost:3000" }
  progreso.value = 1

  fichero.value.map(async (el) => {
    try {
      const res = await axios.post('http://localhost:3000/material',
        el, { headers })
      progreso.value++
    } catch (error) {
      ficheroErrores.value.push(el)
    }

  })
}

</script>
  
<style scoped>

</style>