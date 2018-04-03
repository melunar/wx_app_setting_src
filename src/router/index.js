import Vue from 'vue'
import Router from 'vue-router'
import Setting from '@/pages/setting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'setting',
      component: Setting
    }
  ]
})
