<script setup>
import { useUserList } from '@/stores/user.js'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { addUserDB } from '@/firebase/firebase.js'

const router = useRouter()

const name = ref('')
const pass = ref('')
const pass2 = ref('')
const err = ref('')

const addUser = () => {
    if(pass == pass2){
        addUserDB({name: name.value, pass: pass.value})
        router.push({name: 'Inicio'})
    }
    else{
        err.value='Las contraseñas no coinciden'
    }
}
</script>


<template>
    <div>
        <div>
            <h1>Registro</h1>
            <p>Nombre de usuario</p>
            <input v-model.trim="name"  type="text">
            <p>Contraseña</p>
            <input v-model.trim="pass"  type="password">
            <p>Repite contraseña</p>
            <input v-model.trim="pass2"  type="password">
            <button @click="addUser">enviar</button>
        </div>
        <div v-if="err != ''">
            <p>{{ err }}</p>
        </div>
    </div>
</template>


<style  scoped>

</style>