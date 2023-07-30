<template>
    <div>
        <h3>{{ username }}</h3>
        <h3>{{ userage }}</h3>
        <h3>{{ userclass }}</h3>
    </div>
</template>

<script>
export default {
    name: 'Vuedome2Hellotes',
    props:{
        username:{
            type:String,
            default:'zhangsan',
            //设置是否为必要
            required:true
        },
        userage:{
            type:Number,
            default:18
        },
        userclass:{
            type:String,
            default:'一年级'
        }
    },
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="less" scoped>

</style>