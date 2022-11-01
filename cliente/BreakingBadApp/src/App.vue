<template>
<div class>
    <div>
        <img src="@/components/icons/banner3.jpg" />
    </div>
    <div class="divClass">
        <div>
            <CharacterList :list="list" :favList="favList" />
        </div>

        <div>
            <Fav :favList="favList" />
        </div>
    </div>
</div>
</template>

<script>
import CharacterList from './components/CharacterList.vue';
import Fav from './components/Fav.vue';
import axios from 'axios';
export default {
    name: 'App',
    components: {
        CharacterList,
        Fav,
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
        }
    },
    methods: {
        async setList() {
            try {
                const response = await axios.get(`https://www.breakingbadapi.com/api/characters`);
                this.list = (response.data);
            } catch (error) {
                console.log(error);
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
    background-color: #111410;
}
</style>