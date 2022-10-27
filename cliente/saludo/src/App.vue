
<script>
import Lista from './components/Lista.vue';
export default {
    name: 'App',
    components:{Lista},
    data(){
      return{
        personas:[
          {nombre: 'Juan', apellido: 'Garrigos'},
          {nombre: 'Pablo', apellido: 'Lantigua'},
          {nombre: 'Victor', apellido: 'Gil'},
        ],
        filtro: '',
      }
    },
    computed:{
        filterPersonas(){
            if(!this.filtro || this.filtro.length < 3)
            return this.personas;
            else
            return this.personas.filter(x=> x.nombre.includes(this.filtro) || x.apellido.includes(this.filtro));
        }
    },
  }
</script>

<template>  
   <input type="text" v-model.trim="filtro"/> 
    <Lista :tabla="filterPersonas" />
</template>

<style scoped>
</style>
