const routers = [{
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },{
      path: '/materialManage',
      meta: {
          title: 'materialManage'
      },
      component: (resolve) => require(['./views/materialManage.vue'], resolve)
    },{
      path: '/addMaterial',
      meta: {
          title: 'addMaterial'
      },
      component: (resolve) => require(['./views/addMaterial.vue'], resolve)
    },{
      path: '/matchManage',
      meta: {
          title: 'matchManage'
      },
      component: (resolve) => require(['./views/matchManage.vue'], resolve)
    },{
      path: '/designManage',
      meta: {
          title: 'designManage'
      },
      component: (resolve) => require(['./views/designManage.vue'], resolve)
    },{
      path: '/addDesigner',
      meta: {
          title: 'addDesigner'
      },
      component: (resolve) => require(['./views/addDesigner.vue'], resolve)
    },{
      path: '/menu6',
      meta: {
          title: 'menu6'
      },
      component: (resolve) => require(['./views/page6.vue'], resolve)
    },{
      path: '/menu7',
      meta: {
          title: 'menu7'
      },
      component: (resolve) => require(['./views/page7.vue'], resolve)
    }
];
export default routers;
