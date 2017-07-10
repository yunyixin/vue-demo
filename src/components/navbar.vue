<!-- 单文件组件 -->
<template>
    <div class="navbar">
        <template  v-for="(nav, index) in navs">
            <router-link :to="nav.path" class="navbar_item" @click="onClick">
                {{nav.text}}
            </router-link>
        </template>
    </div>
</template>

<script>

  export default{

    props: {
      navs: {type: Array}
    },

    methods: {
      onClick() {
        alert('跳转...');
      }
    }
  };
</script>

<style lang="scss">
    .navbar {
        display: flex;

        &_item {
            margin: 4px;
            color: #fff;
            border: 1px solid palegoldenrod;
            border-radius: 4px;
            background: palegoldenrod;
        }
    }
</style>