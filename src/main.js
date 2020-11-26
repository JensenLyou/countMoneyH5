import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import 'lib-flexible'
import elTableInfiniteScroll from 'el-table-infinite-scroll';

Vue.config.productionTip = false
Vue.use(elTableInfiniteScroll);

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
