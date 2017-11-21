const routers = [{
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },{
      path: '/menu1',
      meta: {
          title: 'menu1'
      },
      component: (resolve) => require(['./views/page1.vue'], resolve)
    },{
      path: '/menu2',
      meta: {
          title: 'menu2'
      },
      component: (resolve) => require(['./views/page2.vue'], resolve)
    },{
      path: '/menu3',
      meta: {
          title: 'menu3'
      },
      component: (resolve) => require(['./views/page3.vue'], resolve)
    },{
      path: '/menu4',
      meta: {
          title: 'menu4'
      },
      component: (resolve) => require(['./views/page4.vue'], resolve)
    },{
      path: '/menu5',
      meta: {
          title: 'menu5'
      },
      component: (resolve) => require(['./views/page5.vue'], resolve)
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
