import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/login'
import NotFound from '@/components/error/404'
import Homepage from '@/components/home/homepage'
import Home from '@/components/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage,
      children: [
        {
          path: '',
          component: Home,
        },
        {
          path: 'helloworld',
          component: HelloWorld
        }
      ]
    },
    {
    	path: '/login',
    	name: 'login',
    	component: Login
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
