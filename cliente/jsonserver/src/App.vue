<template>
  <div v-if="!loginOk">
    <form>
        <h4>Nombre</h4>
        <input type="text" v-model="name"/>
        <h4>Apellidos</h4>
        <input type="password" v-model="pass"/>
        <button @click="login">Enviar</button>
    </form>
  </div>
  <div v-else>
    <p>{{user.value.name}}</p>
    <p>{{user.value.nivel}}</p>
  </div>

</template>

<script setup>
import { ref } from 'vue';


const loginOk = ref(false);
const user = ref({});

const login = async () => {
  console.log(name.value);
  console.log(pass.value);
  try{
    const response = await axios.get(
      `http://localhost:3000/user/?name=${name.value}&pass=${pass.value}`
    );
    console.log(response.length)
    response.length > 0 ? loginOk.value = true : loginOk.value = false;
    user.value = response[0];
  }
  catch{
    console.log('error')
  }
  

}

</script>


<style scoped>
</style>
