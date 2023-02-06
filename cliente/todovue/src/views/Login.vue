<script setup>
import { useUserList } from '@/stores/user.js'
import { ref } from 'vue'
import { getUserDB } from '@/firebase/firebase.js'

const userList = useUserList()

const name = ref('')
const pass = ref('')

const addUser = async () => {
    let a = await getUserDB(name.value)
    console.log(a[0])
}
</script>


<template>
    <div>
        <div>
        <h1>Iniciar sesión</h1>
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