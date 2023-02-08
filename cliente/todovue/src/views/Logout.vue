<script setup>
import { useRouter } from 'vue-router'
import { useMainUser } from '@/stores/user.js'
import { ref } from 'vue'
import { getUserDB } from '@/firebase/firebase.js'

const mainUser = useMainUser()
const router = useRouter()

const logout = () => {
    mainUser.setMainUser(null)
    router.push({name: 'Inicio'})
}
</script>


<template>
    <div v-if="mainUser.mainUser != null">
        <h1>Cerrar Sesión</h1>
        <p>Estas seguro de cerrar sesión <b>{{ mainUser.mainUser.name }} </b> ?</p>
        <button @click="logout">Cerrar sesión</button>
    </div>
</template>


<style  scoped>
button{
    text-decoration: none;
    margin-right: 2rem;
    background: #4ad295;
     padding: 0.25rem 0.75rem;
    border-radius: 0.2rem;
}
</style>