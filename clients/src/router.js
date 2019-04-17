import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Contract from './views/contract/contract'
=======
import mains from './views/main/mains';
import clientInsert from './views/client/insert';
import clientquery from './views/client/query';
import clientupdate from './views/client/updata';
>>>>>>> d7cd287ab6c5070b6b938fad06a836527c019332

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
<<<<<<< HEAD
      path: '/contract',
      name: 'contract',
      component: Contract,
      meta:{
        title:'客户合同文件管理',
      }
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
=======
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
>>>>>>> d7cd287ab6c5070b6b938fad06a836527c019332
  ]
})
