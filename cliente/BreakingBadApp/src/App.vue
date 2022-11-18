<template>
<div class="bg-[#111410] h-full items-center">
    <div class="top-0 w-screen h-20 sm:h-40">
        <img class="w-full h-full object-cover" src="@/assets/banner5.jpg" />
    </div>
    <div class="md:flex  md:flex-row justify-center">
        <div class="mt-5">
            <CharListTitle />
            <Browser  @setSearch ="setList"/>
            <div v-if="isLoading">
                <Loading />
            </div>
            <div v-else>
                <CharacterList :list="list" :favList="favList" :maxChar="maxChar" :isMax="setIsMaxChar" @addFav="addFav" @deleteFav="deleteFav" @showMaxChar="showMaxChar"/>
            </div>
        </div>
        <div  v-if="favExist == true">
            <div class="mt-5">
                <FavListTitle />
                <FavList :favList="favList" :maxChar="maxChar" :isMax="setIsMaxChar" @deleteFav="deleteFav" @showMaxChar="showMaxChar" />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import CharacterList from './components/CharacterList.vue';
import FavList from './components/FavList.vue';
import Loading from './components/Loading.vue';
import CharListTitle from './components/CharListTitle.vue';
import FavListTitle from './components/FavListTitle.vue';
import Browser from "./components/Browser.vue";
import axios from 'axios';


export default {
    name: 'App',
    components: {
        CharacterList,
        FavList,
        Loading,
        CharListTitle,
        FavListTitle,
        Browser,
    },
    created() {
        if (localStorage.getItem('favListData') != null) {
            this.favList = JSON.parse(localStorage.getItem('favListData'));
        }
    },
    data() {
        return {
            list: [],
            favList: [],
            maxChar: null,
            isMax: false,
            isLoading: false,   
        }
    },
    methods: {
        async setList(search) {
            try {
                this.isLoading = true;
                const response = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${search}`);
                this.list = (response.data);
                console.log(response);
                this.isLoading = false;
            } catch (error) {
                console.log(error);
            }
        },
        showMaxChar(char){
            if(char == null){
                this.maxChar = null;
            }else{
                this.maxChar = char;
            }         
        },
        addFav(char){
            this.favList.push(char);
            localStorage.removeItem('favListData');
            localStorage.setItem('favListData', JSON.stringify(this.favList));
        },  
        deleteFav(item) {
            const index = this.favList.findIndex(x => x.char_id === item.char_id);
            this.favList.splice(index, 1);
            localStorage.removeItem('favListData');
            localStorage.setItem('favListData', JSON.stringify(this.favList));
        },
        setSearch (search) {
            this.$emit("setSearch", search);
        },
    },
    computed: {
        favExist(){
            return this.favList.length == 0 ? false : true;
        },
        setIsMaxChar(){
            return this.maxChar
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