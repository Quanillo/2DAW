<template>
    <h1>Fav List</h1>
    <ul>
        <li v-for="(item, index) in favList" :key="index">
            <Character :char="item" v-on:addFav="addFav"/>
        </li>
    </ul>
</template>

<script>
import Character from "./Character.vue";
export default {
    name: 'Fav',
    components: {Character},
    props: {
        list:{
            type: Array,
        },
    },
    data(){
        return{
            favList:[],
        }
    },
    methods:{

    },  
    computed: {
    }   
}
</script>

<style scoped>

</style>
