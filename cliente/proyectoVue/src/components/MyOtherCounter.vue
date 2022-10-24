<script setup>
defineProps({
  msg2: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div>
    <h1>{{msg2}}</h1>
  </div>
</template>

<style scoped>
h1{
    color: red;
}
</style>
