import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import App from '@/App'
import Login from '@/components/login/login'
import NotFound from '@/components/error/404'
import Home from '@/components/home/home'
import Home_2 from '@/components/home/home_2'
import Home_1 from '@/components/home/home_1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: 'home_1',
          component: Home_1
        },
        {
          path: 'home_2',
          component: Home_2
        }
      ]
    },
    {
      path: '/helloworld',
      component: HelloWorld
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
