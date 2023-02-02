<script setup>
import { useUserList } from '@/stores/user.js'
import { ref } from 'vue'
import { addUserDB } from '@/firebase/firebase.js'

const userList = useUserList()

const id = ref('')
const name = ref('')
const pass = ref('')

const addUser = () => {
    userList.addUser({name: name.value, pass: pass.value})
    addUserDB({name: name.value, pass: pass.value})
}
</script>


<template>
    <div>
        <div>
        <h1>Registro</h1>
            <p>nombre de usuario</p>
            <input v-model.trim="name"  type="text">
            <p>contraseña</p>
            <input v-model.trim="pass"  type="text">
            <button @click="addUser">enviar</button>
    </div>
    </div>
</template>


<style  scoped>

</style>