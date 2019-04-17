import Vue from 'vue'
import Router from 'vue-router'
import mains from './views/main/mains';
import clientInsert from './views/client/insert';
import clientquery from './views/client/query';
import clientupdate from './views/client/updata';
import sellinsert from './views/cart/cinsert';
import sellquery from './views/cart/cinsert';
import tu from './views/tu';


Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/tu',
      name:'tu',
      component:tu,
    },
    {
      path: '/mains',
      name: 'mains',
      meta: {
        title: '主页',
      },
      component:mains,
      children:[
        {
          path:'clientquery',
          name:'clientquery',
          meta: {
            title: '查看客户',
          },
          component:clientquery,
        },
        {
          path: 'clientinsert',
          name: 'clientinsert',
          meta: {
            title: '添加客户',
          },
          component: clientInsert,
        },
        {
          path: 'clientupdate',
          name: 'clientupdate',
          meta: {
            title: '编辑客户',
          },
          component: clientupdate,
        },
        {
          path: 'sellinsert',
          name: 'sellinsert',
          meta: {
            title: '添加任务',
          },
          component: sellinsert,
        },
        {
          path: 'sellquery',
          name: 'sellquery',
          meta: {
            title: '查看任务',
          },
          component: sellquery,
        },

      ]
    }
  ]
})
