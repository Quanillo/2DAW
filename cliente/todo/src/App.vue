<template>
  <h1 class="text-6xl">To-Do!</h1>

  <div class="container">
    <div class="inputs">
      <h4>Add to-do: </h4>
      <input type="text" v-model.trim="todo" @keyup.enter="addTodo" ref="todo"/> 
    </div>
    <div class="inputs">
      <h4>Filter to-do: </h4>
      <input type="text" v-model.trim="filter"/> 
    </div>
 
    <ul>
      <li v-for="(todo, index) in filterTodo" :key="index">
                  {{ todo }}
      </li>
    </ul>
  </div>

</template>

<script >
  export default {
    name: 'App',
    data(){
      return{
        todo: '',
        todoList: [],
        filter: null,
      }
    },
    methods:{
      addTodo(){
        this.todoList.push(this.todo);
        this.todo= '';
        this.$refs.todo.focus();
      }
    },
    computed:{
      filterTodo(){
        if(!this.filter)
          return this.todoList;
        else
          return this.todoList.filter(x=> x.includes(this.filter));
      }
    },
  }
</script>


<style scoped>

  h1{
    text-align: center;
  }
  .inputs{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-evenly;
  }
  
  ul{
    list-style: none;
    padding-inline-start: 0px;
  }
</style>
