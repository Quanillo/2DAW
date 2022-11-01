<template>
    <div>
        <h1 class="text-2xl text-stone-200">Fav List</h1><br>
        <ul>
            <li v-for="(item, index) in setFavList" :key="index">
                <Character :char="item" :favList="favList" :isFav="isFav" @deleteFav="deleteFav" />

            </li>
        </ul>
    </div>
</template>

<script>
import Character from "./Character.vue";
export default {
    name: 'Fav',
    components: { Character },
    props: {
        favList: {
            type: Array,
        },
        isFav: {
            type: Boolean,
        }
    },
    methods: {
        deleteFav(item) {
            const index = this.favList.findIndex(x => x.char_id === item.char_id);
            this.favList.splice(index, 1);
            localStorage.removeItem('favListData');
            localStorage.setItem('favListData', JSON.stringify(this.favList));
        }
    },
    computed: {
        setFavList() {
            return this.favList;
        }
    }
}
</script>

<style scoped>

</style>