<template>
  <v-app>
    <!-- 直接使用全局注册的组件 -->
    <v-app-bar app dense elevation="3" color="#fff">
      <navbar></navbar>
    </v-app-bar>
    <v-main>

      <router-view>
        <home></home>
      </router-view>

    </v-main>
    <!-- app的作用是为了让main减去footer的高度 -->
    <v-footer>
      <foodebar></foodebar>
    </v-footer>
  </v-app>
</template>
<script>
import home from '@/components/home.vue'
import Navbar from './components/navbar.vue'
import Foodebar from './components/foodebar.vue'


export default {
  name: 'App',

  components: {
    home,
    Navbar,
    Foodebar,


  },
}
</script>
