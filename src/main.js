import Vue from 'vue';
// import VueResource from 'vue-resource';   // 网络请求模块
import VueRouter from 'vue-router';

import App from './App.vue';
import SignIn from './container/signin.vue';
import Detail from './container/detail.vue';

// Vue.use(VueResource);

Vue.use(VueRouter);


const router = new VueRouter({
  routes: [
    {
      path: '/signin', component: SignIn
    }, {
      path: '/detail', component: Detail
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