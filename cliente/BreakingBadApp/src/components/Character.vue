<template>
    <div>
        <span><b>{{ char.name }}</b></span>
        <span> '{{ char.nickname}}'</span><br>
        <span v-for="(ocupation, index) in char.occupation" :key="index">
            {{ ocupation }}<br>
        </span>
        <span>{{ char.status }} &#160 &#160</span>
        <img :src="char.img" @error="$event.target.src='https://m.media-amazon.com/images/I/51USIhCUJYL._AC_.jpg'" width="200" height="200">
    </div>
</template>

<script>
export default {
    name: 'Character',
    props: {
        char:{
            type: Object,
        }, 
    },
    methods: {
        addFav(){
            this.$emit('addFav', this.char);
        },
        deleteFav(){
            this.$emit('deleteFav', this.char);
        },
        getImage(){
            try {
                let url = char.img;
            } catch (error) {
                return 'https://m.media-amazon.com/images/I/51USIhCUJYL._AC_.jpg';
            }
        }
    }
}
</script>

<style scoped>

</style>
