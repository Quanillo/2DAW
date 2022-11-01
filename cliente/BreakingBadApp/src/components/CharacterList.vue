<template>
    <div>
        <div class="place-items-center">
            <h1 class="text-2xl text-stone-200"> Find characters</h1>
            <input type="text" v-model.trim="search" @keyup.enter="setList" class="bg-lime-100"/>
            <ul>
                <li v-for="(item, index) in setList" :key="index">
                    <Character :char="item" :favList="favList" @addFav="addFav" @deleteFav="deleteFav" />
                </li>
            </ul>
        </div>

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
            } else {
                return this.list.filter(x => x.name.toUpperCase().includes(this.search.toUpperCase()));
            }

        },
    },
}
</script>
    
<style scoped>

</style>
    