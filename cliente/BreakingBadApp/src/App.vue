<template>
<div class="bg-[#111410] h-full">
    <div>
        <img src="@/components/icons/banner5.jpg" />
    </div>
    <div class="flex flex-row justify-center ">
        <div class="mt-5">
            <CharListTitle />
            <div v-if="isLoading">
                <Loading />
            </div>
            <div v-else>
                <CharacterList :list="list" :favList="favList" />
            </div>
        </div>
        <div  v-if="favExist == true">
            <div class="mt-5">
                <FavListTitle />
                <Fav :favList="favList" />
            </div>
        </div>
        <div class="mt-5 justify-start">
            <button
                @click="changeMode"
                class="px-4 py-2 text-white bg-gray-600 dark:bg-purple-700"
            >
                Dark Toggle
            </button>
        </div>
    </div>

</div>
</template>

<script>
import CharacterList from './components/CharacterList.vue';
import Fav from './components/Fav.vue';
import Loading from './components/Loading.vue';
import CharListTitle from './components/CharListTitle.vue';
import FavListTitle from './components/FavListTitle.vue';
import axios from 'axios';
import { useDark, useToggle } from "@vueuse/core";

export default {
    name: 'App',
    components: {
        CharacterList,
        Fav,
        Loading,
        CharListTitle,
        FavListTitle,
    },
    created() {
        if (localStorage.getItem('favListData') != null) {
            this.favList = JSON.parse(localStorage.getItem('favListData'));
        }
    },
    mounted() {
        this.setList();
    },
    data() {
        return {
            list: [],
            favList: [],
            isLoading: true,
        }
    },
    methods: {
        async setList() {
            try {
                const response = await axios.get(`https://www.breakingbadapi.com/api/characters`);
                this.list = (response.data);
                this.isLoading = false;
            } catch (error) {
                console.log(error);
            }
        },
        changeMode(){
            const isDark = useDark();
            const toggleDark = useToggle(isDark);
            return toggleDark;
        }
    },
    computed: {
        favExist(){
            return this.favList.length == 0 ? false : true;
        }
    },
}
</script>

<style scoped>
.divClass{
    display: flex;
    flex-direction:row;
    align-items: top;
    justify-content:space-evenly;
    background-color: #111410;
}
</style>