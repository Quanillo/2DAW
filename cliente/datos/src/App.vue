<template>
  <div v-if="show === 'login'">
    <Login @login="login" @signup="signup" />
  </div>
<!--
  <div v-else-if="show === 'signup'">
    <LoadUsers @cargados="getUsers" />
    <Signup @back="back" @created="addUser" />
    <UserList :userList="userList" @deleted="deleteUser" />
  </div>
-->
  <div v-else>
    <div v-if="user.admin === true">
      <AdminView  :userList="userList" @back="back"/>
    </div>
    <div v-else>
      <UserView :user="user" @back="back" />
    </div>
  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Login from './components/Views/Login.vue';
import AdminView from './components/Views/AdminView.vue';
import UserView from './components/Views/UserView.vue';


const show = ref('login');
const user = ref({});
let userList = ref([]);


onMounted(() => {
  getUsers();
  console.log(userList)
})

const getUsers = async () => {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/`)
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
