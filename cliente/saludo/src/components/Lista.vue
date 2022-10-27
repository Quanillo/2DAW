<template>
   
    <ul>
        <li v-for="(el, index) in tabla" key="index">
            {{ el.nombre }}
            {{ el.apellido }}
        </li>
    </ul>

</template>

<script>
export default {
    name: 'Lista',
    props:{
        tabla: {
            type: Array,
            required: true
        },
    },
}
    
</script>
