import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

//导入组件
import fastFood from "../views/fastFood.vue"
import playStations from "../views/playStations.vue"
import hotelService from "../views/hotelService.vue"


//导入路由子组件
import chFood from "../views/childernrouter/chFood.vue"
import Hotelfood from "../views/childernrouter/HotelFoodService.vue"

//创建路由规则
const router=new VueRouter({
    routes:[
        {
            name:"fastFood",
            path:"/fastFood",
            component:fastFood,
            children:[
                {
                    name:"chFood",
                    path:"chFood",
                    component:chFood,
                    props: true,
                    props($route){
                        return {
                            name:$route.params.name,
                            age:$route.params.id
                        }
                    }                    
                }
            ]
        },
        {
            name:"playStations",
            path:"/playStations",
            component:playStations,

        },
        {
            name:"hotelService",
            path:"/hotelService",
            component:hotelService,
            children:[
                {
                    name:"Hotelfood",
                    path:"Hotelfood",
                    component:Hotelfood,
                    props({params}){
                        return{
                           name: params.name,
                           id: params.id,
                           foodrequire:params.foodrequire
                        }
                    },
                }

            ]
        }

    ]
}) 

export default router