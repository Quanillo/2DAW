<template>
    <div class="m-5 place-items-center">
        <div class="text-center">
        </div>
            <div v-if="maxChar == null">
                <ul>
                    <li v-for="(item, index) in this.list" :key="index">
                        <CharMin :char="item" :favList="favList" :maxChar="maxChar" @addFav="addFav" @deleteFav="deleteFav" @showMaxChar="showMaxChar" />
                    </li>
                 </ul>   
            </div>
            <div v-else>
                <Character :char="this.maxChar" :favList="favList" @addFav="addFav" @deleteFav="deleteFav" @showMaxChar="showMaxChar" />
            </div>
        </div>

</template>
    
<script>
import Character from "./Character.vue";
import CharMin from "./CharMin.vue";
export default {
    name: 'CharacterList',
    components: { Character, CharMin },
    props: {
        list: {
            type: Array,
        },
        favList: {
            type: Array,
        },
        maxChar: {
            type: Object,
        },
  
    },
    data() {
        return {
            filterList: [],
            //search: '',
            //maxChar: null,
        }
    },
    methods: {
        addFav(char) {
            this.$emit('addFav', char);
        },
        deleteFav(char) {
            this.$emit('deleteFav', char);
        },
        setSearch(newSearch){
            this.search = newSearch;
        },
        showMaxChar(char){
            this.$emit('showMaxChar', char);
        },
    },
    computed: {
        /*
        setList() {
            console.log(this.search);
            if (this.search == '') {
                return this.list.slice(0, 10);
            } else if(this.search == 'all') {
                return this.list;
            } else {
                return this.list.filter(x => x.name.toUpperCase().includes(this.search.toUpperCase()));
            }
        },*/
    },
}
</script>
    
<style scoped>

</style>
    