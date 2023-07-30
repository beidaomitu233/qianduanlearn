<template>
      <div class="add-todo-item">
        <input type="text" placeholder="请输入待办事项">
        <button>添加</button>
      </div>
</template>

<script>
export default {
  name: 'addToDoItem',
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
  .add-todo-item {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.add-todo-item input {
  flex: 1;
  padding: 10px;
  border-radius: 5px;
  border: none;
}

.add-todo-item button {
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: blue;
  color: white;
}
</style>