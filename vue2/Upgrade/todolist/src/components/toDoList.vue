<template>
      <div class="todo-list">
        <ToDoItem></ToDoItem>
      </div>
</template>

<script>
import ToDoItem from './toDoItem';
export default {
  name: 'toDoList',
  components: {
    ToDoItem,
  },
  data() {
    return {
      
    };
  },

  methods: {
    
  },

  computed: {
    
  },

  watch: {
    
  },
};
</script>

<style lang="less" scoped>
  .todo-list {
  margin-top: 20px;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.todo-item button {
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  background-color: green;
  color: white;
}
</style>