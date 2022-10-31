<template>
<div class="charDiv">
    <div>
        <span><b>{{ char.name }}</b></span>
        <span> '{{ char.nickname}}'</span><br>
        <p><b>Ocupations: </b></p>
        <span v-for="(ocupation, index) in char.occupation" :key="index">
            {{ ocupation }}<br>
        </span>
        <p><b>Status: </b></p>
        <span>{{ char.status }} &#160 &#160</span>
        <p><b>portrayed: </b></p>
        <p>{{ char.portrayed}}</p>
        <div v-if="!isFav">
            <button @click="addFav(item)">❤️add Fav</button>
        </div>
        <div v-else>
            <button @click="deleteFav(item)">🖤delete Fav</button>
        </div>
    </div>
    <div>
        <img :src="char.img" @error="$event.target.src='https://m.media-amazon.com/images/I/51USIhCUJYL._AC_.jpg'" width="200" height="200">
    </div>
</div>      
        
    
</template>

<script>
export default {
    name: 'Character',
    props: {
        char:{
            type: Object,
        }, 
        favList:{
            type: Array,
        }
    },
    methods: {
        addFav(){
            this.$emit('addFav', this.char);

        },
        deleteFav(char){
            this.$emit('deleteFav', this.char);
        },
    },
    computed: {
        isFav(){
            if(this.favList.find(x=> x.char_id == this.char.char_id))
                return true;
            else
                return false;
        }
    }   
}
</script>

<style scoped>
.charDiv{
    display: flex;
    flex-direction:row;
    align-items: top;
    justify-content:space-evenly;
    border: 5px;
    border-style: solid;
}
</style>
