<template>
    <div id="app">
        <div class="nav">
            <!-- 单组件必须小写，不能自闭合 -->
            <nav-bar></nav-bar>
            <ol>
                <todo-item
                        v-for="(item, index) in lists"
                        v-bind:list="item"
                        v-bind:key="index">
                </todo-item>
            </ol>
        </div>
        <div class="input">
            <normal-input></normal-input>
        </div>
        <div class="view">
            <div> sidebar: {{msg}}</div>
            <div>content: {{content}}</div>
            <list :lists="lists" title="父组件传递属性" @click="onAdd"></list>
        </div>
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

    data() {
      return {
        msg: 'welcome',
        content: 'this is a template for vue',
        lists: [{
          text: '111'
        }, {
          text: '222'
        }]
      };
    },

    methods: {
      onAdd() {
        this.lists.push({text: '新增'});
      }
    },

    components: {NormalInput, NavBar, List}
  };
</script>

<style lang="scss">
    #app {
        width: 600px;
        height: 100%;
        border: 1px solid greenyellow;

        & > div {
            margin: 10px;
        }
    }

    .nav {
        margin: 4px;
        border: 1px solid red;
    }

    .view {
        margin: 10px;
        border: 1px solid darkgray;
    }
</style>