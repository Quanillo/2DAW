<template>
  <MyCounter />
  {{ msg }}
  <br>
  <MyOtherCounter />
  {{ msg2 }}
</template>

<script>
import MyCounter from '@/components/MyCounter.vue'
import MyOtherCounter from '@/components/MyOtherCounter.vue';
export default {
  name: 'App',
  data() {
    return {
      msg: 'Hola soy juan',
      msg2: 'Hola soy otro componente',
    }
  },
}
</script>

<style scoped>

</style>
