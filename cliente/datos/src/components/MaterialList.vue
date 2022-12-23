<template>
    <ul v-for="material in materialList" :key="material">
        <li v-if="material.reservado==='NO'"> <Material :material="material" /> </li>
    </ul>
</template>
  
<script setup>
import { defineProps } from 'vue';
import Material from './Material.vue';

const props = defineProps({
    materialList: {
        type: Array,
  },
});

</script>

<style></style>