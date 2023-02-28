<template>
    <p>Indica el numero de personas</p>
    <input type="number" v-model="number">
    <button @click="setList">addNumber</button>
    <ul>
        <li v-for="person in personList">
            <Persons :person="person" />
        </li>
    </ul>
</template>
  
<script setup>
import { ref } from 'vue';
import axios from "axios";
import Persons from './Persons.vue';

const number = ref(0)
const personList = ref([])

const setList = async () =>{
    try{
    const response = await axios.get(
      `http://localhost:3000/persons?_limit=${number.value}`,
    );
    personList.value = response.data
  }
  catch(e){
    console.log(e)
  }
}
</script>
  
<style scoped></style>