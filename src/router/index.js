import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Result from '@/components/Result'


Vue.use(Router)

import Vant from 'vant'
import { Dialog } from 'vant';
import 'vant/lib/index.css'

Vue.use(Vant)
Vue.use(Dialog);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/result',
      name: 'Result',
      component: Result
    }
  ]
})
