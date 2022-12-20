<template>
  <div v-if="show === 'login'">
    <Login @login="login" @signup="signup" />
  </div>
  <div v-else-if="show === 'signup'">
    <LoadUsers @cargados="getUsers"/>
    <Signup @back="back" @created="addUser" />
    <List :userList="userList" @deleted="deleteUser" />
  </div>
  <div v-else>
    <p>{{ user.name }}</p>
    <p>{{ user.level }}</p>
    <button @click="back">BACK</button>
  </div>

</template>

<script setup>
import axios from 'axios';
import Login from './components/Login.vue';
import Signup from './components/Signup.vue'
import List from './components/List.vue';
import LoadUsers from './components/LoadUsers.vue';
import { ref, onMounted } from 'vue';


const show = ref('login');
const user = ref({});
let userList = ref([]);


onMounted(() => {
  console.log('ey')
  getUsers();
})

const getUsers = async () => {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/`, {
    })
    userList.value = response.data;
  }
  catch (e) {
    console.log(e)
  }
}

const addUser = async (user) => {
  userList.value.push(user)
}

const deleteUser = (id) => {
  userList.value = userList.value.filter(x => x.id !== id);
}

function login(data) {
  if (data) {
    user.value = data[0];
    show.value = '';
  }
  else {
    show.value = 'login';
  }
}

function signup() {
  show.value = 'signup';
}

function back() {
  show.value = 'login';
}

</script>


<style scoped>

</style>
