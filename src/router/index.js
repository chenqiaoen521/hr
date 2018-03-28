import Vue from 'vue'
import Router from 'vue-router'
import * as types from '@/store/mutation-types'
import store from '@/store'

Vue.use(Router)

const Login = () => import(/* webpackChunkName: "hr-Login" */ '@/components/login/login')
const Index = () => import(/* webpackChunkName: "hr-Index" */ '@/components/index/index')
const Hr = () => import(/* webpackChunkName: "hr-hr" */ '@/components/hr/hr')
const Center = () => import(/* webpackChunkName: "hr-center" */ '@/components/center/center')
const Resume = () => import(/* webpackChunkName: "hr-resume" */ '@/components/resume/resume')
const History = () => import(/* webpackChunkName: "hr-history" */ '@/components/history/history')

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit(types.TOKEN, window.localStorage.getItem('token'))
}

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/hr',
      name: 'hr',
      component: Hr,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/center',
      name: 'center',
      component: Center,
      meta: {
        requireAuth: true
      },
      children: [
        {
          name: 'resume',
          path: 'resume',
          component: Resume
        },
        {
          name: 'history',
          path: 'history',
          component: History
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: from.fullPath}
      })
    }
  } else {
    next()
  }
})

export default router
