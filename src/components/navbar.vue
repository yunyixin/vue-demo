<!-- 单文件组件 -->
<template>
    <div class="navbar">
        <div v-for="(nav, index) in navs" class="navbar_item" @click="onClick">
            {{nav.text}}
        </div>
    </div>
</template>

<script>

  export default{

    data() {
      return {
        navs: [{
          text: '导航1'
        }, {
          text: '导航2'
        }]
      };
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