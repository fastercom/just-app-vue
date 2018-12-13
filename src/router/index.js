import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: function (resolve) {
        require(['../views/Index.vue'], resolve)
      },
      meta: {
        title: '用户登录'
      },
      name: '登录',
    }
  ]
})
