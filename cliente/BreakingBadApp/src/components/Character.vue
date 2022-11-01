<template>
    <div class="m-5 rounded-lg  bg-emerald-900 shadow-sm drop-shadow-lime shadow-lime-200 hover:opacity-80">
        <div class="flex font-sans backg">
            <div class="flex-none w-48 relative ">
                <img :src="char.img" 
                class=" rounded-l-lg absolute inset-0 w-full h-full object-cover" 
                loading="lazy">
            </div>
            <div class="flex-auto p-6">
                <span class="flex-auto text-xl font-semibold text-stone-200">{{ char.name }}</span>
                <span class="text-lg font-semibold text-lime-200"> '{{ char.nickname }}'</span><br>
                <p class="text-lg font-semibold text-lime-200">Ocupations:</p>
                <span v-for="(ocupation, index) in char.occupation" :key="index">
                    <p class=" flex-auto text-base font-semibold text-stone-200"> ☢️ {{ ocupation }}</p>
                </span>
                <div>
                    <span class="text-lg font-semibold text-lime-200">Status: </span>
                    <span class=" flex-auto text-base font-semibold text-stone-200">{{ char.status }} &#160 &#160
                        &#160</span>
                </div>
                <div>
                    <span class="text-lg font-semibold text-lime-200">portrayed: </span>
                    <span class=" flex-auto text-base font-semibold text-stone-200">{{ char.portrayed }}</span>
                </div>
                <div>
                    <span class="text-lg font-semibold text-lime-200">Seasons: </span>
                    <span class=" flex-auto text-base font-semibold text-stone-200">{{ char.appearance.length }}</span>
                </div>
                <div class="flex justify-end">
                    <div v-if="!isFav">
                        <button @click="addFav(item)"
                            class="text-2xl hover:scale-125 border-solid border-black">💚</button> 
                    </div>
                    <div v-else>
                        <button @click="deleteFav(item)"
                            class="text-2xl hover:scale-125 border-solid border-black">🖤</button>
                    </div>
                </div>
  
            </div>
            <div>

            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    name: 'Character',
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