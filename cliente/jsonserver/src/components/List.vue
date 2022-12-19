<template>
    <ul v-for="user in userList" :key="user">
        <div>
            <li>{{user.name}}</li>
            <button @click="remove(user.id)">Delete</button>
            <button @click="edit">Edit</button>
        </div>

    </ul>
</template>
  
<script setup>
//import { ref, onMounted } from 'vue';
import axios from 'axios';

const emits = defineEmits(['deleted']);
const props = defineProps({
  userList: {
    type: Array,
  },
});

const alertRemoe = () => {
    alert
}

const remove = async (id) =>{
    try {
        await axios.delete(
            `http://localhost:3000/user/${id}`, {
        })
        emits('deleted', id);
    }
    catch (e) {
        console.log('error')
        console.log(e)
    }
}

const edit = () =>{

}
</script>
  
  
<style scoped>
div{
    display: flex;
    flex-direction: row;
}
li{
    list-style: none;
}
</style>


/** Crear una lista con los añadidos. que en esa lista haya un boton de borrarlo y otro bonton de editarlo. Aparezca un modal para 
preguntar si estamos seguros de eliminarlo, o con el formulario para editarlo
*/