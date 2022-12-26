<template>
  <div v-if="showMasive === 'Users'">
    <MasiveUsers :userList="userList"  @back="showMasive = ''"/>
  </div>
  <div v-else-if="showMasive === 'Material'">
    <MasiveMaterial :materialList="materialList" @back="showMasive = ''"/>
  </div>
  <div v-else>
    <button @click="showMasive = 'Material'">Cargar material</button>
    <button @click="showMasive = 'Users'">Cargar usuarios</button>
    <button @click="emits('back')">cerrar sesion</button>
  </div>
</template>
  
<script setup>

import MaterialList from '../MaterialList.vue'
import MasiveMaterial from '../MasiveMaterial.vue';
import MasiveUsers from '../MasiveUsers.vue';
import { ref, onMounted } from "vue";
import axios from 'axios';

const emits = defineEmits(['back']);

const props = defineProps({
  userList: {
    type: Array,
  },
  materialList:{
    type: Array,
  }
});

const showMasive = ref('')



</script>
  
<style scoped>

</style>
  
  
  