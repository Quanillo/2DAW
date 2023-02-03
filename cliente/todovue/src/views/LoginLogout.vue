<script setup>
import SingUp from './SingUp.vue';
import Login from './Login.vue'
import { ref } from 'vue'

const showLogin = ref(true)
</script>


<template>
    <button @click="showLogin = true">login</button>
    <button @click="showLogin = false">Singup</button>
    <div v-if="showLogin">
        <Login />
    </div>
    <div v-else>
        <SingUp/>
    </div>

</template>


<style  scoped>

</style>