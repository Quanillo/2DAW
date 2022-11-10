<template>
    <div class="text-center">
        <input type="text" v-model.trim="newSearch" @keydown.enter="setSearch"
        class="mt-1 rounded-md shadow-sm focus:border-emerald-200 focus:ring-emerald-200 sm:text-sm"/>
    </div>
   
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
