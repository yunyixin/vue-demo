import Vue from 'vue';
// import VueResource from 'vue-resource';   // 网络请求模块
import App from './App.vue';

// Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
});