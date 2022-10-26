<script> 
import PokeBrowser from './components/PokeBrowser.vue';
import PokeList from './components/PokeList.vue';
export default {
  name: 'App',
  components: {
    PokeBrowser,
    PokeList,
  },
}
</script>

<template>
  <PokeBrowser/>
  <PokeList />
</template>

<style scoped>

</style>
