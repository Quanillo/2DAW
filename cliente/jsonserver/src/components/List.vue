<template>
    <ul v-for="user in userList" :key="user">
        <li>{{user.name}}</li>
    </ul>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

onMounted(() => {
  getUsers();
})
let userList = ref([]);

const getUsers = async () => {
    try {
        const response = await axios.get(
            `http://localhost:3000/user/`, {
        })
        userList = response.data;
    }
    catch (e) {
        console.log(e)
    }
}



</script>
  
  
<style scoped>
</style>


/** Crear una lista con los añadidos. que en esa lista haya un boton de borrarlo y otro bonton de editarlo. Aparezca un modal para 
preguntar si estamos seguros de eliminarlo, o con el formulario para editarlo
*/