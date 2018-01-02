import Vue from 'vue';
import iView from 'iview';
import Vuex from 'vuex';
import Util from './libs/util';
import Login from './login.vue';
import 'iview/dist/styles/iview.css';


Vue.use(VueRouter);
Vue.use(Vuex);

Vue.use(iView);

new Vue({
    el: '#Login',
    render: h => h(Login)
});
