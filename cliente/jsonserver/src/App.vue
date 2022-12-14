<template>
  <div v-if="show === 'login'">
    <Login @login="login" @signup="signup"/>
  </div>
  <div v-else-if="show === 'signup'">
    <Signup  @back="back" />
  </div>
  <div v-else>
    <p>{{user.name}}</p>
    <p>{{user.level}}</p>
    <button @click="back">BACK</button>
  </div>

</template>

<script setup>
import Login from './components/Login.vue';
import Signup from './components/Signup.vue'
import { ref } from 'vue';


const show = ref('login');
const user = ref({});

function login(data){
  if(data){
    user.value = data[0];
    show.value = '';
  }
  else{
    show.value = 'login';
  }
}

function signup () {
  show.value = 'signup';
}

function back () {
  console.log('hola')
  show.value = 'login';
}

</script>


<style scoped>
</style>
