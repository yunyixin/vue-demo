<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>


<script>
  import Vue from 'vue';
  import NormalInput from './components/input.vue';
  import NavBar from './components/navbar.vue';
  import List from './components/list.vue';

  console.log('vue', Vue.component());

  // 定义组件构造器
  // const MyComponent = Vue.extend({/* 选项 */});

  // 注册全局组件
  Vue.component('todo-item', {
    template: '<li>{{list.text}}</li>',
    props: ['list']
  });

  /* Vue.component('user-input', {
   functional: true, // 函数化组件
   render: function(createElement, context) {

   },
   props: {}
   });*/

  export default{
    name: 'app',

    components: {NormalInput, NavBar, List}
  };
</script>

<style lang="scss">
    #app {
        width: 100%;
        height: 100%;
        border: 1px solid greenyellow;

        & > div {
            margin: 10px;
        }
    }
</style>