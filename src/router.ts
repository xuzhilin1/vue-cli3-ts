import Vue from 'vue';
import Router from 'vue-router';
import login from './views/login/login.vue'
Vue.use(Router);

export default new Router({
  routes: [
    {
       path: '*',
       redirect: '/'
    },
    {
       path: '/',
       redirect: '/login',
       meta: {
         title: '登陆页面',
         requiresAuth: false
       }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
