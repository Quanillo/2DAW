<template>
    <div class="m-5 place-items-center">
        <ul>
            <li v-for="(item, index) in setFavList" :key="index">
                <CharMin :char="item" :favList="favList" :isFav="isFav"  @deleteFav="deleteFav"  @showMaxChar="showMaxChar"/>
            </li>
        </ul>
    </div>
</template>

<script>
import CharMin from "./CharMin.vue";
export default {
    name: 'Fav',
    components: { CharMin },
    props: {
        favList: {
            type: Array,
        },
        isFav: {
            type: Boolean,
        },
        maxChar: {
            type: Object,
        },
    },
    emits:["showMaxChar"],
    methods: {
        deleteFav(item) {
            const index = this.favList.findIndex(x => x.char_id === item.char_id);
            this.favList.splice(index, 1);
            localStorage.removeItem('favListData');
            localStorage.setItem('favListData', JSON.stringify(this.favList));
        },
        showMaxChar(char){
            this.$emit('showMaxChar', char);
        },
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