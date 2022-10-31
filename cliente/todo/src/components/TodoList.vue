<template>
    <ul>
        <li v-for="(el, index) in lista" key="index">
            
            <div>
                <h4>{{ el.title }}</h4>
                <p>{{ el.nota }}</p>
                <button @click="delete">🗑️</button>
            </div>
           
        </li>
    </ul>
</template>

<script >
export default {
    name: 'Lista',
    props:{
        lista: {
            type: Array,
            required: true,
            default: null,
        },
        filtro: {
            type: String,
            default: null,
        }
    },
}
</script>


<style scoped>
div{
    background-color: #B3B3B3;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:space-evenly;
    padding: 20px;
    margin: 5px;
}
h4{
   padding: 20px;
   margin: 5px;
   background-color:  #282828;   
}
</style>
  