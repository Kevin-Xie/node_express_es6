import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Signin from '@/components/user/signin'
import Home from '@/components/home/home'
import NotFound from '@/components/error/404'
import Index from '@/pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '',
          redirect: '/home',
        },
        {
          path: '/home',
          component: Home
        }
      ]
    },
    {
    	path: '/signin',
    	name: 'signin',
    	component: Signin
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
