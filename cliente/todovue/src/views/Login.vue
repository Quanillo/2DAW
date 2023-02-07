<script setup>
import { useUserList } from '@/stores/user.js'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { getUserDB } from '@/firebase/firebase.js'

const userList = useUserList()
const router = useRouter()

const name = ref('')
const pass = ref('')
const err = ref('')

const userLoged = async () => {
    let a = await getUserDB(name.value)
    a.forEach(element => {
        if(element.pass == pass.value)
            userList.setMainUser(element)
            router.push({name: 'Inicio'}) 
    });
}
</script>

<template>
    <div>
        <div>
            <h1>Iniciar sesión</h1>
            <p>nombre de usuario</p>
            <input v-model.trim="name"  type="text">
            <p>contraseña</p>
            <input v-model.trim="pass"  type="password">
            <button @click="userLoged">enviar</button>
        </div>
        <div v-if="err!=''">
            <p>{{ err }}</p>
        </div>
    </div>
</template>


<style  scoped>

</style>