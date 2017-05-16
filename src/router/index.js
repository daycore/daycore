import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import 'bulma/css/bulma.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
