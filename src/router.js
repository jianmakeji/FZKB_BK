const routers = [{
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },{
      path: '/materialManage',
      meta: {
          title: '服装设计师看板数据管理系统'
      },
      component: (resolve) => require(['./views/materialManage.vue'], resolve)
    },{
      path: '/addMaterial',
      meta: {
          title: '服装设计师看板数据管理系统'
      },
      component: (resolve) => require(['./views/addMaterial.vue'], resolve)
    },{
      path: '/matchManage',
      meta: {
          title: '服装设计师看板数据管理系统'
      },
      component: (resolve) => require(['./views/matchManage.vue'], resolve)
    },{
      path: '/designManage',
      meta: {
          title: '服装设计师看板数据管理系统'
      },
      component: (resolve) => require(['./views/designManage.vue'], resolve)
    },{
      path: '/addDesigner',
      meta: {
          title: '服装设计师看板数据管理系统'
      },
      component: (resolve) => require(['./views/addDesigner.vue'], resolve)
    },{
      path: '/menu6',
      meta: {
          title: '服装设计师看板数据管理系统'
      },
      component: (resolve) => require(['./views/page6.vue'], resolve)
    },{
      path: '/menu7',
      meta: {
          title: '服装设计师看板数据管理系统'
      },
      component: (resolve) => require(['./views/page7.vue'], resolve)
    }
];
export default routers;
