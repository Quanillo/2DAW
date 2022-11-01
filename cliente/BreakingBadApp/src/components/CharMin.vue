<template>
    <div class="m-5 rounded-lg  bg-emerald-900 shadow-sm shadow-emerald-200 hover:opacity-80">
        <div class="flex font-sans backg">
            <div class="m-5 flex-none relative ">
                <img :src="char.img" 
                class="object-top object-cover w-24 h-24 rounded-full mx-auto" 
                loading="lazy">
            </div>
            <div class="flex-auto p-6">
                <span class="flex-auto text-xl font-semibold text-stone-200">{{ char.name }}</span>
                <span class="text-lg font-semibold text-lime-500"> '{{ char.nickname }}'</span><br>
                
                <div>
                    <span class="text-lg font-semibold text-lime-500">Status: </span>
                    <span class=" flex-auto text-base font-semibold text-stone-200">{{ char.status }} &#160 &#160 &#160</span>
                </div>
                <div>
                    <span class="text-lg font-semibold text-lime-500">Seasons: </span>
                    <span class=" flex-auto text-base font-semibold text-stone-200">{{ char.appearance.length }} &#160 &#160 &#160</span>
                </div>
                    <span class="text-left flex justify-end">
                        <div v-if="!isFav">
                            <button @click="addFav(item)"
                                class="text-2xl hover:scale-125 border-solid border-black">💚</button>
                        </div>
                        <div v-else>
                            <button @click="deleteFav(item)"
                                class="text-2xl hover:scale-125 border-solid border-black">🖤</button> 
                        </div>
                    </span>
                
            </div>
            <div>

            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    name: 'CharMin',
    props: {
        char: {
            type: Object,
        },
        favList: {
            type: Array,
        }
    },
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