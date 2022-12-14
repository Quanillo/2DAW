<template>
    <div>
      <form>
          <h4>Nombre</h4>
          <input type="text" v-model="name"/>
          <h4>Apellidos</h4>
          <input type="password" v-model="pass"/>
          <button @click="login">Enviar</button>
      </form>
    </div>  
  </template>
  
<script setup>

const emits = defineEmits(['login'])
const name = ref('');
const pass = ref('');
  
const login = () =>{
    emits('login',e.target.result);
}

  
  
</script>
  
  
  <style scoped>
  </style>
  