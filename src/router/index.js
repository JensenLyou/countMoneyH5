import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'startChallenge',
    meta: {
      // 页面标题title
      title: '数钱小游戏'
    },
    component: () => import('../views/startChallenge.vue')
  },
  {
    path: '/countMoneyRank',
    name: 'countMoneyRank',
    meta: {
      // 页面标题title
      title: '数钱榜'
    },
    component: () => import('../views/countMoneyRank.vue')
  },
  {
    path: '/countMoneyGame',
    name: 'countMoneyGame',
    meta: {
      // 页面标题title
      title: '开始游戏'
    },
    component: () => import('../views/countMoneyGame.vue')
  },
  {
    path: '/upLinkRecord',
    name: 'upLinkRecord',
    meta: {
      // 页面标题title
      title: '数钱记录'
    },
    component: () => import('../views/upLinkRecord.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
