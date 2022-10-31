<template>
<div class="divClass">
    <div>
        <h1><b>Find characters</b></h1>
            <input type="text" v-model.trim="search" @keyup.enter="setList" />
            <button @click="setList">🔍︎</button><br><br>
        
        <ul>
            <li v-for="(item, index) in setList" :key="index">
                <Character :char="item" :favList="favList" @addFav="addFav" @deleteFav="deleteFav"/>
                
            </li>
        </ul>
    </div>
    <div>
        <Fav :favList="favList"/>
    </div>
</div>
</template>

<script>
import Character from "./Character.vue";
import Fav from "./Fav.vue";
export default {
    name: 'CharacterList',
    components: {Character, Fav},
    created(){
        if(localStorage.getItem('favListData')!=null){
            this.favList = JSON.parse(localStorage.getItem('favListData'));
        }
    },
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
        addFav(item){
            if(!this.favList.includes(item)){
                this.favList.push(item);
                localStorage.setItem('favListData', JSON.stringify(this.favList));
            }
        },
        deleteFav(item){
            const index = this.favList.findIndex(x=> x.char_id === item.char_id);
            this.favList.splice(index, 1);
            localStorage.removeItem('favListData');
            localStorage.setItem('favListData', JSON.stringify(this.favList));
            this.isFav = false;
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
    },

}
</script>

<style scoped>
.divClass{
    display: flex;
    flex-direction:row;
    align-items: top;
    justify-content:space-evenly;
}
h1{
    font-size:larger;
}
</style>


