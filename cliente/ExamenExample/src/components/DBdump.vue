<template>
    <ReadFile texto="Elige un fichero" @carga="cargaFichero" />
    <div v-if="terminado">
        <button @click="cargaEnBBDD_PromiseAll">Carga en BBDD</button>
        <h1>Se han producido los siguientes errores {{ ficheroErrores.length }}</h1>
        <ul>
            <li v-for="(el, key) in ficheroErrores" :key="key">{{ el }}</li>
        </ul>
        <p v-if="cargaCorrecta">Fichero cargado correctamente en BBDD</p>
    </div>
</template>
  
<script setup>
import ReadFile from "./ReadFile.vue";
import axios from "axios";
import { ref } from "vue";

const fichero = ref([])
const ficheroErrores = ref([])
const terminado = ref(false)
const cargaCorrecta = ref(false)

const cargaFichero = (fich) => {
    //Pasamos la cadena de caracteres del fichero obtenido a un array
    fichero.value = fich
        .toString()
        .trim()
        .split('\n')
    //Hacemos tonteriítas innecesarias con el progreso 
    terminado.value = true
    //Ahora pasamos el fichero de csv a JSON'
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
} //Fin de CargaFichero

const cargaEnBBDD_PromiseAll = async () => {
    //const headers = {"Access-Control-Allow-Origin" : "http://localhost:3000"}
    await Promise.all(
        fichero.value.map(async (el) => {
            try {
                const res = await axios.post('http://localhost:3000/persons',
                    el)//,{headers})
            } catch (error) {
                ficheroErrores.value.push(el)
            }
        })
    )
    cargaCorrecta.value = true;
}
</script>
  
<style scoped></style>