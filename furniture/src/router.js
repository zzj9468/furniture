import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/index';
import About from './views/About';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children:[
          {path:'',component:Index},
          {path: 'about',component:About}
      ]
    }
  ]
})
