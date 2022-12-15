<template>
    <div>
        <p>{{err}}</p>
        <h4>Nombre</h4>
        <input type="text" v-model="name" ref="in_name"/>
        <h4>Nivel</h4>
        <select id="level" v-model="level">
            <option value="makina">Makina</option>
            <option value="perro">Perro</option>
            <option value="pakete">Pakete</option>
        </select>
        <h4>Password</h4>
        <input type="password" v-model="pass" />
    </div>
    <div>
        <button @click="signup">CREATE ACOUNT</button>
        <button @click="back">LOGIN</button>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import axios from 'axios';

const emits = defineEmits(['back', 'signup']);
const err = ref('')
const name = ref('');
const level = ref('');
const pass = ref('');

const signup = async () => {
    if (!(await exist()) && name.value!=='' && pass.value!=='') {
        try {
            await axios.post(
                `http://localhost:3000/user/`, {
                name: `${name.value}`,
                pass: `${pass.value}`,
                level: `${level.value}`,
            })
            err.value = '';
            clear();
            back();
        }
        catch (e) {
            err.value='Ups, Algo salió mal!'
            console.log(e)
        }
    }
    else {
        err.value = 'Usuario registrado.'
        clear();
    }

}

const exist = async () => {
    try {
        const response = await axios.get(
            `http://localhost:3000/user/?name=${name.value}`
        );
        return response.data.length === 0 ? false : true;
    }
    catch (e) {
        console.log(e)
        return false;
    }
}

function back (){
  emits('back');
}

function clear (){
    name.value = '';
    pass.value = '';
    level.value = '';
}

</script>
  
  
<style scoped>

</style>
  