<template>
    <ReadFile texto="Select file" @carga="cargaFichero" />
    <button @click="cargaEnBBDD">Carga En Base Datos</button>
    <ul>
        <li v-for="(el, key) in ficheroErrores" :key="key">{{ el }}</li>
    </ul>
      <p>Se han producido los siguientes errores {{ ficheroErrores.length }}</p>
      <p>Llevamos grabados la cantidad de {{ progreso }} usuarios</p>
</template>
  
<script setup>
import axios from 'axios';
import ReadFile from './ReadFile.vue';
import { ref } from 'vue';


const fichero = ref([])
const ficheroErrores = ref([])
const progreso=ref(0)

const emits = defineEmits(['cargados']);

const cargaFichero = (fich) => {
  //Pasamos la cadena de caracteres del fichero obtenido a un array
  fichero.value = fich
    .toString()
    .trim()
    .split('\n')

  const cabecera = fichero.value[0].split(',')
  fichero.value.shift() //Eliminamos la cabecera
  fichero.value = fichero.value.map((el, idx) =>
    el.split(',')
      .map((el2, idx2) => [cabecera[idx2], el2]) //Creamos un par clave valor
      .map((el2) => {
        let obj = {}
        obj[el2[0]] = el2[1]
        return obj
      }) //Creamos un objeto con cada clave valor
      .reduce((ac, el) => { return { ...ac, ...el } }, {}) //Reducidmos para crear el array de previos a Json
  )
  //progreso.value = 100
}
const cargaEnBBDD = () => {
  const headers = { "Access-Control-Allow-Origin": "http://localhost:3000" }

  fichero.value.map(async (el) => {
    try {
      const res = await axios.post('http://localhost:3000/user',
        el, { headers })
      progreso.value++
    } catch (error) {
      ficheroErrores.value.push(el)
    }

  })
  emits('cargados');
}
</script>
  
  
<style scoped>
li {
    list-style: none;
}
</style>

