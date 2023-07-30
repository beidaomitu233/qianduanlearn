<template>
  <div>
       <div class="todo-item">
        <input type="checkbox" class="todo-checkbox" v-model="completed">
        <span class="todo-content">{{ itemContent }}</span>
        <button class="todo-delete" @click="deleteItem">删除</button>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      itemContent:'学习Vue'
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
  .todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.todo-item:hover {
  background-color: #f0f0f0;
}

.todo-checkbox {
  margin-right: 10px;
}

.todo-content {
  flex: 1;
}

.todo-delete {
  margin-left: 10px;
}
</style>