<template>
    <h1>Find characters</h1>
   
    <input type="text" v-model.trim="newSearch" @setSearch="setSearch"/>
    <button @click="setSearch">🔍︎</button><br><br>
    
</template>

<script>
export default {
    name: 'Browser',
    emits: ["setSearch"],
    data() {
        return {
            newSearch: '',
        }
    },
    methods: {
       
    },
    computed:{
        setSearch () {
            console.log(this.newSearch)
            this.$emit("setSearch", this.newSearch);
        }
    }
}
</script>

<style scoped>

</style>
