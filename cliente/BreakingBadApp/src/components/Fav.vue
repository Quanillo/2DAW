<template>
         <h1>Fav List</h1>
        <ul>
            <li v-for="(item, index) in setFavList" :key="index">
                <Character :char="item" />
                <button @click="deleteFav(item)">🖤delete Fav</button>
            </li>
        </ul>
</template>

<script>
import Character from "./Character.vue";
export default {
    name: 'Fav',
    components: {Character},
    data(){
        return{
            favList:[],
        }
    },
    methods:{
        addFav(item){
            this.favList.includes(item) ? item : this.favList.push(item);
        },
        deleteFav(item){
            const index = this.favList.findIndex(x=> x.id === item.id);
            this.favList.splice(index, 1);
        }
    },  
    computed: {
        setFavList(){
            return this.favList;
        }
    }   
}
</script>

<style scoped>

</style>
