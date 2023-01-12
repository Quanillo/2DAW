<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const emits = defineEmits(['nuevoUsuario']);

const router = useRouter();
const nombre = ref('')
const apellidos = ref('')
const nivel = ref('')

const nuevoUsuario = () => router.push({
    name: 'Usuario',
    params: {nombre: nombre.value},
    query: {apellidos: apellidos.value, nivel: nivel.value}
})
</script>

<template>
    <div>
        <h1>Formulario</h1>
        <form>
            <p>nombre</p>
            <input type="text" v-model="nombre">
            <p>apellidos</p>
            <input type="text" v-model="apellidos">
            <p>nivel</p>
            <input type="text" v-model="nivel">
            <button @click="nuevoUsuario">enviar</button>
        </form>
    </div>
</template>


<style  scoped>

</style>