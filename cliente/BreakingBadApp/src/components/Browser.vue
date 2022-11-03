<template>
    <input type="text" v-model.trim="newSearch" @keydown="setSearch"
    class="mt-1 rounded-md shadow-sm focus:border-emerald-200 focus:ring-emerald-200 sm:text-sm"/>
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
            this.$emit("setSearch", this.newSearch);
        }
    }
}
</script>

<style scoped>

</style>
