import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import showone from '@/components/showone'
import del from '@/components/del'
import add from '@/components/add'
import update from '@/components/update'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Index },
    {path:'/showone/:id',component:showone},
    {path:'/del/:id',component:del},
    {path:'/add',component:add},
    {path:'/update/:id',component:update}
  ]
})
