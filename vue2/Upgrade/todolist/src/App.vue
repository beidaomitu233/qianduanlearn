<template>
  <div id="app">
    <h1>Vue.js Todo App</h1>
    <AddTodoItem></AddTodoItem>
    <TodoList></TodoList>
    <ShowStatus></ShowStatus>
  </div>
</template>

<script>
//引入四个组件,均采用小驼峰命名法。
import AddTodoItem from './components/addToDoItem';
import TodoList from './components/toDoList';
import ShowStatus from './components/showStatus';


export default {
  name: 'App',
  components: {
    AddTodoItem,
    TodoList,
    ShowStatus,
  },

  }

</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 20px;
  width: 500px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid #ccc;
  border-radius: 15px;

}

#app::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(10px);
  z-index: -1;
}

</style>
