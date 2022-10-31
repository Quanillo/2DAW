<template>
    <h1>Find characters</h1>
    <form @submit="setSearch">
        <input type="text" v-model.trim="newSearch" @keyup.enter="setSearch" />
        <input type="submit" value="🔍︎" />
    </form>
    
</template>

<script>
export default {
    name: 'Browser',
    data() {
        return {
            newSearch: '',
        }
    },
    methods: {
        setSearch () {
            this.$emit("submit", this.newSearch);
        }
    }
}
</script>

<style scoped>

</style>
