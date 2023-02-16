<script setup>
import { useMainUser } from '@/stores/user.js'
import { useTodoList } from '@/stores/todo.js'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { getUserDB, getTodoDB } from '@/firebase/firebase.js'

const todoListP = useTodoList()
const mainUser = useMainUser()
const router = useRouter()

const name = ref('')
const pass = ref('')
const err = ref('')

const userLoged = async () => {
    let a = await getUserDB(name.value)
    a.forEach(element => {
        if(element.pass == pass.value){
            mainUser.setMainUser(element)
            getTodoDB(mainUser.mainUser, (qs)=>{
                const list = []
                qs.forEach((doc)=>{
                    const todo = doc.data()
                    todo.id = doc.id
                    list.push(todo)
                })
                todoListP.setTodoList(list)
                console.log(list)
            })
        }
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
            <button @click="userLoged" @keypress="enter">enviar</button>
        </div>
        <div v-if="err!=''">
            <p>{{ err }}</p>
        </div>
    </div>
</template>


<style  scoped>

</style>