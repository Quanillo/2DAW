<template>
    <div>
        <p>{{err}}</p>
        <h4>Nombre</h4>
        <input type="text" v-model="name" />
        <h4>Nivel</h4>
        <input type="text" v-model="level" />
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
            }
            )
            name.value = '';
            pass.value = '';
            level.value = '';
        }
        catch (e) {
            err.value='Ups, Algo salió mal!'
            console.log(e)
        }
    }
    else {
        console.log('El usuario ya esta registrado')
        name.value = '';
        pass.value = '';
        level.value = '';
    }

}

const exist = async () => {
    let ex = true;
    try {
        const response = await axios.get(
            `http://localhost:3000/user/`
        );
        ex = response.data.filter(x => x.name === name.value).length === 0 ? false : true;
    }
    catch (e) {
        console.log(e)
    }
    return ex;
}

function back (){
  emits('back');
}

</script>
  
  
<style scoped>

</style>
  