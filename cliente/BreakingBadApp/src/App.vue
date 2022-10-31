<template>
    <div>
        <div>
            <CharacterList :list="list" />
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
    mounted(){
     this.setList();
    },
    data() {
        return {
            list: [],
        }
    },
    methods: {
        async setList(){
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

</style>
