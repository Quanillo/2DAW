<template>
<div class="divClass">
    <div>
        <h1 class="text-2xl">Find characters</h1>
            <input type="text" v-model.trim="search" @keyup.enter="setList" />
            <button @click="setList">🔍︎</button>
        
        <ul>
            <li v-for="(item, index) in setList" :key="index">
                <Character :char="item" v-on:addFav="addFav"/>
            </li>
        </ul>
    </div>

    <div>
        <h1>Fav List</h1>
        <ul>
            <li v-for="(item, index) in setFavList" :key="index">
                <Character :char="item"  v-on:deleteFav="deleteFav"/>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import Character from "./Character.vue";
import Fav from "./Fav.vue";
export default {
    name: 'CharacterList',
    components: {Character},
    props: {
        list:{
            type: Array,
        }
    },
    data() {
        return {
            filterList: [],
            favList: [],
            search: '',
        }
    },
    methods: {
        addFav(char){
            this.favList.push(char);
            this.char.isFav = true;
            this.setFavList();
        },
        deleteFav(char){
            this.favList.filter(x=>x.id!==char.id);
            this.char.isFav = false;
            this.setFavList();
        }
    },
    computed: {
        setList() {
            if(this.search == ''){
                return this.list;
            }else{
                return this.list.filter(x=> x.name.toUpperCase().includes(this.search.toUpperCase()));
            }
            
        },
        setFavList(){
            return this.favList;
        }

    }
}
</script>

<style scoped>
.divClass{
    display: flex;
    flex-direction:row;
    align-items: top;
    justify-content:space-evenly;
}
</style>


