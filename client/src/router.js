import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Users from './views/Users/List.vue'
import AddUser from './views/Users/Add.vue'
import UpdateUser from './views/Users/Update.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/users',
      name: 'users',
      component: Users
    },
    {
      path:'/users/add',
      name: 'users-add',
      component: AddUser
    },
    {
      path:'/users/update/:id',
      name: 'users-update',
      component: UpdateUser
    }
  ]
})
