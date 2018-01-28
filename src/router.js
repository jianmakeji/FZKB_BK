const routers = [{
        path: '/',
        meta: {
            title: '服装设计师看板数据管理系统'
        },
        
    },{
            path: '/index',
            meta: {
                title: '服装设计师看板数据管理系统'
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
      path: '/addMaterial/:id',
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
      path: '/designerManage',
      meta: {
          title: '服装设计师看板数据管理系统'
      },
      component: (resolve) => require(['./views/designerManage.vue'], resolve)
    },{
      path: '/addDesigner',
      meta: {
          title: '服装设计师看板数据管理系统'
      },
      component: (resolve) => require(['./views/addDesigner.vue'], resolve)
    },{
      path: '/addDesigner/:id',
      meta: {
          title: '服装设计师看板数据管理系统'
      },
      component: (resolve) => require(['./views/addDesigner.vue'], resolve)
    },{
      path: '/designerDetail',
      meta: {
          title: '服装设计师看板数据管理系统'
      },
      component: (resolve) => require(['./views/designerDetail.vue'], resolve)
    }
];
export default routers;
