import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const components = {
  layout: () => import('@/views/Layout'),
  Home: () => import('@/views/Home'),
  Message: () => import('@/views/Message'),
  Admin: () => import('@/views/Admin'),
  Login: () => import('@/views/Login'),
  UserInfo: () => import('@/views/UserInfo')
}

export default new Router({
  routes: [{
      path: '/',
      redirect: '/home',
      name: 'layout',
      component: components.layout,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: components.Home
        },
        {
          path: '/message',
          name: 'Message',
          component: components.Message
        },
        {
          path: '/admin',
          name: 'Admin',
          component: components.Admin     
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: components.Login
    },
    {
      path: '/userinfo',
      name: 'UserInfo',
      component: components.UserInfo
    }
  ],
})

// if (sessionStorage.getItem('token')) {
//   store.commit('set_token', sessionStorage.getItem('token'))
// }

// const router = new Router({
//   mode: 'history',
//   routes
// });

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(r => r.meta.requireAuth)) {
//     if (store.state.token) {
//       next();
//     } else {
//       next({
//         path: '/login',
//         query: {
//           redirect: to.fullPath
//         }
//       })
//     }
//   } else {
//     next();
//   }
// })
