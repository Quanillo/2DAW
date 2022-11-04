<template>
    <div v-if="isLoading">
        <Loading />
    </div>
    <div v-else>
        <div class="m-5 rounded-lg  bg-emerald-900 shadow-sm drop-shadow-lime shadow-lime-200 hover:opacity-80">
            <div class="flex font-sans backg">
                <div class="flex-none w-60 relative ">
                    <img :src="char.img" class=" rounded-l-lg absolute inset-0 w-full h-full object-cover"
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
                        <span class=" flex-auto text-base font-semibold text-stone-200">{{ char.appearance.length
                        }}</span>
                    </div>
                    <div v-if="quoteList.length > 0">
                        <p class="text-lg font-semibold text-lime-200">Quotes: </p>
                        <ul>
                            <li v-for="(item, index) in quoteList" :key="index">
                                <p class=" flex-auto text-base font-semibold text-stone-200">☢️ {{ item.quote }}</p>
                            </li>
                        </ul>
                    </div>
                    <div class="flex justify-end">
                        <button @click="showMaxChar"
                            class="mr-3 text-5xl font-heart text-lime-200 hover:scale-125 border-solid border-black flex justify-end">-</button>
                        <FavButton :char="this.char" :favList="this.favList" @addFav="addFav" @deleteFav="deleteFav" />
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    </div>

</template>
    
<script>
import axios from 'axios';
import FavButton from './FavButton.vue';
import Loading from './Loading.vue';
export default {
    name: 'Character',
    components: { FavButton, Loading },
    props: {
        char: {
            type: Object,
        },
        favList: {
            type: Array,
        }
    },
    data() {
        return {
            quoteList: [],
            isLoading: true,
        }
    },
    emits: ["addFav", "deleteFav", "showMaxChar"],
    mounted() {
        this.setQuoteList();
    },
    methods: {
        addFav() {
            this.$emit('addFav', this.char);
        },
        deleteFav() {
            this.$emit('deleteFav', this.char);
        },
        showMaxChar() {
            this.$emit('showMaxChar', null);
        },
        async setQuoteList() {
            try {
                let [name, surname] = this.char.name.split(' ');
                const response = await axios.get(`https://www.breakingbadapi.com/api/quote?author=${name}+${surname}`);
                this.quoteList = (response.data);
                this.isLoading = false;
            } catch (error) {
                console.log(error);
            }
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