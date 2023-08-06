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
    //切换为history模式
    mode:"history",
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
            //给页面设置独立守护
            beforeEnter(to,from,next){
                console.log("给页面设置独立守护");
                console.log(to);
                //添加业务逻辑
                if(1==1){
                    next();
                }
              
            }
        },
        {
            name:"hotelService",
            path:"/hotelService",
            component:hotelService,
            // 要设置权限的路由要在meta中设置一个isauth的token
            meta:{isauth:"token",tittle:"酒店服务"},
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

//三个参数分别是 ，to要去的路由，form从哪个路由来。next()是允许跳转
router.beforeEach((to, from, next) => {
    // 判断是否可以通过路由要查看router中的meta元信息中是否存有isauth的token
      console.log('输出从哪来');
      console.log(from);
        console.log("输出到哪去");
        console.log(to);
        // 如果没有next指令就不会跳转
        // 找要去的路由中的meta元信息中是否有isauth的token
        document.cookie = "cookieName=cookieValue";
    if(to.meta.isauth){
        //通过获取cookie的值来判断是否有权限
        if (to.meta.isauth == document.cookie ) {
          // 如果有就跳转到目标路由
          next();
        } else {
            
          // 如果没有就跳转到登录界面
          console.log("没有权限");
        }
    }else{
        // 如果没有就跳转到目标路由
        next()
    }

})

router.afterEach((to, from) => {
    //跳转完成后可以做一些事情
    console.log("跳转完成后可以做一些事情");
    //将主页标题重命名。如果没有就显示服务
    document.title=to.meta.tittle || "服务"
    })

export default router