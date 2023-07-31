<template>
  <div>
       <form @submit.prevent="deleteItem(id)">
       <div class="todo-item">
              <input type="checkbox" class="todo-checkbox" v-model="completed">
              <span class="todo-content">{{ item }}</span>
              <span class="todo-content">{{ initiator }}</span>
              <button class="todo-delete" type="submit" >删除</button>
      </div>
        </form>
  </div>
</template>

<script>
import axios from 'axios';
import { BASE_URL } from '../../URL_BASE.CONGIF'

export default {
  name: 'todoItem',

  data() {
    return {
      //删除后没有自动重新渲染页面，所以将数据存储到数据源中，数据改变就会自动渲染
    }
  },
  props:{
      id: {
        type: Number,
        required: true
      },
      item: {
        type: String,
        required: true
      },
      initiator: {
        type: String,
        required: true

      },
      completed: {
        type: Number,
        required: true
      }
  },

  methods: {
    
    //删除todoitem
    deleteItem(id){
      axios({
            method: 'post',
            url: BASE_URL + '/delitem',
            data: {
              id:id
            }
          }).then((res) => {
            console.log(res.data)
            //解构赋值到自己的data
            const { data } = res.data
            //如果affectedRows不等于0，说明删除成功
            if(data.affectedRows=!0){
              alert('删除成功')
            }
          }).catch((err) => {
            console.log(err)
          })
    }
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
  background-color: rgb(230, 67, 67);
  width: 63px;
  height: 36px;
  color: #ffffff;
  border-radius:8px;
  border: 1px solid salmon ;
  font-size: 16px;
}
</style>