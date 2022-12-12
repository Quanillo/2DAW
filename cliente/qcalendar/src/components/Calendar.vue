<template>
    <h1>Create event</h1>
    <form>
        <p>Inicio</p><input type="date" v-model.trim="inicio" />
        <p>Fin</p><input type="date" v-model.trim="final" />
        <button @click="addEvent">Add Event</button>
    </form>
    <Qalendar :events="events" />
</template>

<script>
import {Qalendar} from "qalendar";

export default {
    components: {
        Qalendar,
    },

    data() {
        return {
            events: [
                // ...
                {
                  title: "Advanced algebra",
                  with: "Chandler Bing",
                  time: { start: "2022-05-16 12:05", end: "2022-05-16 13:35" },
                  color: "yellow",
                  isEditable: true,
                  id: "753944708f0f",
                  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda corporis doloremque et expedita molestias necessitatibus quam quas temporibus veritatis. Deserunt excepturi illum nobis perferendis praesentium repudiandae saepe sapiente voluptatem!"
                },
                {
                  title: "Ralph on holiday",
                  with: "Rachel Greene",
                  time: { start: "2022-05-10", end: "2022-05-22"},
                  color: "green",
                  isEditable: true,
                  id: "5602b6f589fc"
                },
                // ...
                {
                  title: "Pablo paqueteando en clase",
                  with: "Pablo Lantigua",
                  time: { start: "2022-12-10 12:10", end: "2022-12-11 13:35" },
                  color: "yellow",
                  isEditable: true,
                  id: "753944708f0f",
                  description: "Madre mia la forma de paquetear de este hombre no tiene limites"
                },
                {
                  title: "Ralph on holiday",
                  with: "Rachel Greene",
                  time: { start: "2022-05-10", end: "2022-05-22"},
                  color: "green",
                  isEditable: true,
                  id: "5602b6f589fc"
                }
            ],
        }

    },
    methods:{
        addEvent(ev){
            console.log()
            //this.events.push({title: "", with: "", time: {start: "", end: ""}, color:"",isEditable: true, id: ""})
        }
    }
}
</script>

<style>
    /** Please observe,
    that your path to the node_modules directory might be different */
    @import '../../node_modules/qalendar/dist/style.css';
</style>
