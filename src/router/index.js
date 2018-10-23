import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const components = {
  layout: () => import('@/views/Layout'),
  Home: () => import('@/views/Home'),
  Message: () => import('@/views/Message'),
  Admin: () => import('@/views/Admin'),
  Login: () => import('@/views/Login'),
  UserInfo: () => import('@/views/UserInfo'),
  News: () => import('@/views/News'),
  Life: () => import('@/views/Life'),
  Review: () => import('@/views/Review'),
  Map: () => import('@/views/Map'),
  Newsdetail: () => import('@/views/News/Newsdetail'),
  Newspic: () => import('@/views/News/Newspic'),
  Adminscore: () => import('@/views/Adminscore'),
  Changepsw: () => import('@/views/Changepsw'),
  Pay: () => import('@/views/Pay')
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
          component: components.Message,
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
    },
    {
      path: '/news',
      name: 'News',
      component: components.News,
    },
    {
      path: '/news/newsdetail',
      name: 'Newsdetail',
      component: components.Newsdetail
    },
    {
      path: '/life',
      name: 'Life',
      component: components.Life
    },
    {
      path: '/review',
      name: 'Review',
      component: components.Review
    },
    {
      path: '/map',
      name: 'Map',
      component: components.Map
    },
    {
      path: '/newspic',
      name: 'Newspic',
      component: components.Newspic
    },
    {
      path: '/adminscore',
      name: 'Adminscore',
      component: components.Adminscore
    },
    {
      path: '/changepsw',
      name: 'Changepsw',
      component: components.Changepsw
    },
    {
      path: '/pay',
      name: 'Pay',
      component: components.Pay
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
