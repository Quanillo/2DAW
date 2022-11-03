<template>
<div class="flex justify-end">
    <div v-if="!isFav">
            <button @click="addFav(item)"
                class="text-5xl font-heart text-[#111410] hover:scale-125 border-solid border-black">p</button>
        </div>
        <div v-else>
            <button @click="deleteFav(item)"
            class="text-5xl font-heart text-lime-200 hover:scale-125 border-solid border-black">p</button> 
    </div>
</div>
</template>
        
<script>
   export default {
    name: 'FavButton',
    props: {
        char: {
            type: Object,
        },
        favList: {
            type: Array,
        }
    },
    emits:["addFav", "deleteFav"],
    methods: {
        addFav() {
            this.$emit('addFav', this.char);
        },
        deleteFav(char) {
            this.$emit('deleteFav', this.char);
        },
    },
    computed:{
        isFav() {
            if (this.favList.find(x => x.char_id == this.char.char_id))
                return true;
            else
                return false;
        }
    }
   }
</script>
        
<style scoped></style>