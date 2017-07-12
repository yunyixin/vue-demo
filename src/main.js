import Vue from 'vue';
// import VueResource from 'vue-resource';   // 网络请求模块
import VueRouter from 'vue-router';

import App from './App.vue';
import Home from './container/Home.vue';

import Lists from './container/Lists.vue';
import Detail from './container/detail.vue';

import LogIn from './container/Account/login.vue';
import Account from './container/Account/account.vue';
import Register from './container/Account/register.vue';

// Vue.use(VueResource);

Vue.use(VueRouter);


const router = new VueRouter({
  routes: [
    {
      path: '/', component: Home
    },
    {
      path: '/account',
      component: Account,
      children: [
        {path: 'login', component: LogIn},
        {path: 'register', component: Register}
      ]
    },
    {
      path: '/lists', component: Lists
    },
    {
      path: '/lists/:id', component: Detail
    }
  ]
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

/*
 const app = new Vue({
 render: (h) => h(App)
 }).$mount('#app')
 */