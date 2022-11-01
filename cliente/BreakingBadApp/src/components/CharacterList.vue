<template>
    <div class="m-5 place-items-center">
        <div class="text-center">
            <input type="text" v-model.trim="search" @keyup.enter="setList" 
            class="mt-1 rounded-md shadow-sm focus:border-emerald-200 focus:ring-emerald-200 sm:text-sm" />
        </div>
        <ul>
            <li v-for="(item, index) in setList" :key="index">
                <Character :char="item" :favList="favList" @addFav="addFav" @deleteFav="deleteFav" />
            </li>
        </ul>
    </div>

</template>
    
<script>
import Browser from "./Browser.vue";
import Character from "./Character.vue";
export default {
    name: 'CharacterList',
    components: { Character, Browser },
    props: {
        list: {
            type: Array,
        },
        favList: {
            type: Array,
        },
    },
    data() {
        return {
            filterList: [],
            search: '',
        }
    },
    methods: {
        addFav(item) {
            if (!this.favList.includes(item)) {
                this.favList.push(item);
                localStorage.setItem('favListData', JSON.stringify(this.favList));
            }
        },
        deleteFav(item) {
            const index = this.favList.findIndex(x => x.char_id === item.char_id);
            this.favList.splice(index, 1);
            localStorage.removeItem('favListData');
            localStorage.setItem('favListData', JSON.stringify(this.favList));
            this.isFav = false;
        },

    },
    computed: {
        setList() {
            if (this.search == '') {
                return this.list.slice(0, 10);
            } else if(this.search == 'all') {
                return this.list;
            } else {
                return this.list.filter(x => x.name.toUpperCase().includes(this.search.toUpperCase()));
            }

        },
    },
}
</script>
    
<style scoped>

</style>
    