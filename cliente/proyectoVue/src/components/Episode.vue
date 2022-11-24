<template>
  <div v-if="this.episode===null">
    <p>Capítulo: No existe este capítulo</p>
    <p>Emisión: No se ha emitido este capítulo</p>
    <p>Número de personajes: 0</p>
  </div>
  <div v-else>
    <p>Capítulo:</p>
    <p> {{this.episode.name}} </p>
    <p>Emisión: {{this.episode.air_date}}</p>
    <p>Número de personajes: {{this.episode.characters.length}}</p>
  </div>
  </template>
  
  <script>
  
  export default {
    name: 'Episode',
    components: {
    },
    props:{
      episode:{
        type: Object,
      }
    },
    data() {
        return {
        }
    },
    methods: {
        
    },
    computed: {

    },
}

  </script>
  
  <style scoped>
  
  </style>
  