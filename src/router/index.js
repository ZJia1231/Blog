import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import article from '@/components/article'
import pic from '@/components/pic'
import other from '@/components/other'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path:'/article',
      name:'article',
      component:article,
    },
    {
      path:'/pic',
      name:'pic',
      component:pic,
    },
    {
      path:'/other',
      name:'other',
      component:other,
    },
  ]
})
