<template>
  <div>
    <p>{{ err }}</p>
    <h4>Nombre</h4>
    <input type="text" v-model="name" />
    <h4>Password</h4>
    <input type="password" v-model="pass" />
  </div>
  <div>
    <button @click="login">LOGIN</button>
   <!-- <button @click="signup">SIGN UP</button>-->
  </div>
</template>
  
<script setup>
import { ref } from 'vue';
import axios from 'axios';

const emits = defineEmits(['login', 'signup']);
const err = ref('')
const name = ref('');
const pass = ref('');

const login = async () => {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/?name=${name.value}&pass=${pass.value}`
    );
    if (response.data.length === 1) {
      emits('login', response.data);
    }
    else {
      name.value = '';
      pass.value = '';
      emits('login', false);

    }
  }
  catch (e) {
    err.value = 'Ups, Algo salió mal!';
    console.log(e)
  }
}

function signup() {
  emits('signup');
}

</script>
  
  
<style scoped>

</style>
  