<template>
    <div class="m-5 rounded-lg  bg-emerald-900 shadow-sm drop-shadow-lime shadow-lime-200 hover:opacity-80">
        <div class="flex font-sans backg">
            <div class="m-5 flex-none relative ">
                <img :src="char.img" 
                class="object-top object-cover w-28 h-28 rounded-full mx-auto border-2 border-lime-200" 
                loading="lazy">
            </div>
            <div class="flex-auto p-6">
                <span class="flex-auto text-xl font-semibold text-stone-200">{{ char.name }}</span>
                <span class="text-lg font-semibold text-lime-200"> '{{ char.nickname }}'</span><br>
                
                <div>
                    <span class="text-lg font-semibold text-lime-200">Status: </span>
                    <span class=" flex-auto text-base font-semibold text-stone-200">{{ char.status }} &#160 &#160 &#160</span>
                </div>
                <div>                    
                    <span class="flex text-right justify-end">
                        <FavButton :char="this.char" :favList="this.favList" @addFav="addFav" @deleteFav="deleteFav"/>
                        <div v-if="!isFav">
                            <button @click="addFav(item)"
                            class="text-5xl font-heart text-[#111410] hover:scale-125 border-solid border-black">p</button>
                        </div>
                        <div v-else>
                            <button @click="deleteFav(item)"
                            class="text-5xl font-heart text-lime-200 hover:scale-125 border-solid border-black">p</button> 
                    </div>
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
    computed: {
        isFav() {
            if (this.favList.find(x => x.char_id == this.char.char_id))
                return true;
            else
                return false;
        }
    }
}
</script>
    
<style scoped>

</style>