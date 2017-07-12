<template>
    <div class="container">
        <h1>this is homePage</h1>

        <div class="nav">
            <!-- 单组件必须小写，不能自闭合 -->
            <nav-bar :navs="navs"></nav-bar>
            <div class="search-input">
                <normal-input rule="搜索" :value="keywords"></normal-input>
            </div>
        </div>

        <div class="content">
            <list :lists="lists" title="父组件传递属性"
                  v-on:add="onAdd"
                  v-on:delete="onDelete">
            </list>
        </div>
    </div>
</template>


<script>
    import NavBar from '../components/navbar.vue';
    import NormalInput from '../components/input.vue';
    import List from '../components/list.vue';

    export default {
      name: 'home',

      data() {

        return {
          keywords: '',
          navs: [{
            text: '链接1',
            path: '/account'
          }, {
            text: '链接2',
            path: '/lists'
          }],
          lists: [{
            text: 'to-do1'
          }, {
            text: 'to-do2'
          }, {
            text: 'to-do3'
          }]
        };
      },

      methods: {
        onAdd() {
          const length = this.lists.length;
          this.lists.push({text: `to-do新增${length + 1}`});
        },
        onDelete(index) {
          this.lists.splice(index, 1);   // dangerously
          // console.log(index, this.lists);
        }
      },

      components: {NavBar, NormalInput, List}
    };

</script>

<style lang="scss">

    .nav {
        display: flex;
        flex-direction: row;
    }

</style>