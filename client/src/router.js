import Vue from 'vue'
import Router from 'vue-router'
import Constants from './_services/Constants'

import Home from './views/Home.vue'
import Users from './views/Users/List.vue'
import AddUser from './views/Users/Add.vue'
import UpdateUser from './views/Users/Update.vue'
import Posts from './views/Posts/List.vue'
import AddPost from './views/Posts/Add.vue'
import UpdatePost from './views/Posts/Update.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: Constants.ROUTES.HOME,
      component: Home
    },
    {
      path:'/users',
      name: Constants.ROUTES.USERS,
      component: Users
    },
    {
      path:'/users/add',
      name: Constants.ROUTES.USERS_ADD,
      component: AddUser
    },
    {
      path:'/users/update/:id',
      name: Constants.ROUTES.USERS_UPDATE,
      component: UpdateUser
    },
    {
      path:'/posts',
      name: Constants.ROUTES.POSTS,
      component: Posts
    },
    {
      path:'/posts/add',
      name: Constants.ROUTES.POSTS_ADD,
      component: AddPost
    },
    {
      path:'/posts/update/:id',
      name: Constants.ROUTES.POSTS_UPDATE,
      component: UpdatePost
    }
  ]
})
