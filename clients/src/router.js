import Vue from 'vue'
import Router from 'vue-router'
import mains from './views/main/mains';
import clientInsert from './views/client/insert';
import clientquery from './views/client/query';
import clientupdate from './views/client/updata';

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
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

      ]
    }
  ]
})
