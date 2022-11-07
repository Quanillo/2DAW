<template>
    <div class="m-5 rounded-lg  bg-emerald-900 shadow-sm drop-shadow-lime shadow-lime-200 hover:opacity-80">
        <div class="sm:flex font-sans backg relative ">
            <div class="p-3  flex-none static ">
                <img :src="char.img" 
                class="object-top object-cover w-28 h-28 rounded-full mx-auto border-2 border-lime-200" 
                loading="lazy">
            </div>
            <div class="p-3 flex-auto static text-center place-self-center">
                <span class="flex-auto text-xl font-semibold text-stone-200">{{ char.name }}</span>
                <span class="text-lg font-semibold text-lime-200"> '{{ char.nickname }}'</span><br> 
                <div class="place-content-center">                    
                    <span class="flex  justify-end"> 
                        <div v-if="this.maxChar === this.char">
                            <button @click="showMinChar"
                            class="mr-3 text-5xl font-heart text-lime-200 hover:scale-125 border-solid border-black flex justify-end">-</button>
                        </div>
                        <div v-else>
                            <button @click="showMaxChar" 
                            class="mr-3 text-5xl font-heart text-lime-200 hover:scale-125 border-solid border-black flex justify-end">+</button>
                        </div>   

                    <FavButton :char="this.char" :favList="this.favList" @addFav="addFav" @deleteFav="deleteFav"/>  
                    </span>
                </div>
            </div>
            <div>

            </div>
        </div>
    </div>
</template>
    
<script>
import FavButton from "./FavButton.vue";

export default {
    name: 'CharMin',
    components: { FavButton },
    props: {
        char: {
            type: Object,
        },
        favList: {
            type: Array,
        },
        maxChar: {
            type: Object,
        },
    },
    data(){
        return{
            //isMax: false,
        }
    },
    emits:["addFav", "deleteFav", "showMaxChar"],
    methods: {
        addFav() {
            this.$emit('addFav', this.char);
        },
        deleteFav() {
            this.$emit('deleteFav', this.char);
        },
        showMaxChar(){
            this.$emit('showMaxChar', this.char);
        },
        showMinChar(){
            this.$emit('showMaxChar', null);
        }
            
        },
    computed: {
        isFav() {
            if (this.favList.find(x => x.char_id == this.char.char_id))
                return true;
            else
                return false;
        },
    }
}
</script>
    
<style scoped>

</style>