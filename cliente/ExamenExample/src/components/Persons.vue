<template>
    <h3>{{ props.person.nombre }}</h3>
    <p>{{ props.person.tipo }}</p>
    <p>{{ props.person.id }}</p>
    <input type="checkbox" id="cbox1" v-model="checkSelect" @click="checkClick">
    <label for="checkbox">{{ props.person.seleccionado }}</label>
</template>
  
<script setup>
import { ref } from 'vue';
import axios from "axios";

const props = defineProps({
    person: Object
})

const checkClick = async () => {
    try {
        if(props.person.seleccionado === false){
            await axios.patch(
                `http://localhost:3000/persons/${props.person.id}`,
                { seleccionado: true }
            );
        }
        else{
            await axios.patch(
                `http://localhost:3000/persons/${props.person.id}`,
                { seleccionado: false }
            );
        }
    }
    catch (e) {
        console.log(e)
    }
}
const checkSelect = ref(false)
</script>
  
<style scoped></style>