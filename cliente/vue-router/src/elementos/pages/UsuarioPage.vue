<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
    <div>
        <p>{{route.params.nombre}}</p>
        <p>{{ route.query.apellidos }}</p>
        <p>{{ route.query.nivel }}</p>
    </div>
</template>


<style  scoped>

</style>