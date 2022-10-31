<template>
  <h1 class="text-6xl">To-Do!</h1>

  <div class="container">
    <div class="inputs">
      <h4>Title</h4>
      <input type="text" v-model.trim="title"  ref="titleRef"/>
      <h4>Note</h4>
      <input type="text" v-model.trim="nota" @keyup.enter="addTodo" ref="notaRef"/> 
      <button @click="addTodo">Add</button>
    </div>
    <div class="filter">
      <h4>Filter to-do: </h4>
      <input type="text" v-model.trim="filtro"/> 
    </div>
  </div>

  <div class="todos"> 
    <TodoList :lista="filterTodo"/>
  </div>
   

</template>

<script >
//import Todo from '@/components/Todo';
import TodoList from '@/components/TodoList.vue'
  export default {
    name: 'App',
    components: {TodoList},
    data(){
      return{
        title: '',
        nota: '',
        todoArr: [],
        filtro: null,
      }
    },
    computed:{
      addTodo(){
        this.todoArr.push({title:this.title, nota: this.nota});
        this.$refs.titleRef.focus();
        this.title = '';
        this.nota = '';
      },  
      filterTodo(){
        if(!this.filtro){
          console.log(this.todoArr);
          return this.todoArr;
        }
   
        else{
          return this.todoArr.filter(x=> x.nota.includes(this.filtro));
        }
      }
    },
  }
</script>


<style scoped>

  h1{
    text-align: center;
    color:#B3B3B3;
  }
  .container{
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content:space-evenly;
  }
  .inputs{
    background-color: #282828;
    color: #FFFFFF;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:space-evenly;
    padding: 20px;
    margin: 5px;
  }
  .filter{
    background-color: #282828;
    color: #FFFFFF;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:space-evenly;
    padding: 20px;
    padding-top: -10px;
    margin: 5px;
  }
  .todos{
    background-color: #282828;
    color: #FFFFFF;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:space-evenly;
    padding: 20px;
    margin: 5px;
  }
  ul{
    list-style: none;
    padding-inline-start: 0px;
  }
</style>
